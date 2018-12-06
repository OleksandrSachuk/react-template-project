import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import config from './config';
import logger from './logger';
import template from '../modules/module1/reducers';
import templateEpic from '../modules/module1/epics';

const isDevelopment = process.env.NODE_ENV === 'development';
const isEnableLogs = config.enable_logs;
const isEnableDevtools = config.enable_devtools;

const rootReducer = combineReducers({
  template,
});

const rootEpic = combineEpics(templateEpic);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [thunk, epicMiddleware];

  if (isDevelopment && isEnableLogs) {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  let composedEnhancers = null;

  if (isDevelopment && isEnableDevtools) {
    composedEnhancers = composeWithDevTools(...enhancers);
  }

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers || enhancers,
  );

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor };
}

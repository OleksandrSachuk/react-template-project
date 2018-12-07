import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// import { history } from '../configurations/store';
import App from '../App';
import { Component1 } from '../modules/module1/components';

const propTypes = {
  history: PropTypes.object.isRequired,
};

const Pages = ({ history }) => (
  <ConnectedRouter history={ history }>
    <div>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/component1" component={ Component1 } />
      </Switch>
    </div>
  </ConnectedRouter>
);

Pages.propTypes = propTypes;

export default Pages;

import { ofType } from 'redux-observable';
import { tap } from 'rxjs/operators';

export const templateEpic = action$ => action$.pipe(
    ofType('TEST'),
    tap(() => console.log('epic')),
  );

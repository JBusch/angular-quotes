import { combineReducers } from 'redux-seamless-immutable';
import { routerReducer } from 'ng2-redux-router';
import { quotesReducer } from './quotes.reducer';
import { IAppState } from './types';

// rootReducer of IAppState
export const rootReducer = combineReducers({
  quotes: quotesReducer,
  router: routerReducer
});

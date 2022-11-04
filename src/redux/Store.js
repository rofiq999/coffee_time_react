import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import rpm from 'redux-promise-middleware';

import loginReducer from './reducers/Login';
import counterReducer from './reducers/Login';
// import bookReducer from './reducers/books';

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});
const store = createStore(reducers, middleware);

export default store;

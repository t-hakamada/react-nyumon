import {
  // 名前被りを避けるため、別名でimport
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import {routerReducer, routerMiddleware} from 'react-router-redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import * as reducers from './reducers';

// TOFIX: any型に適当な型宣言を与える

// src/index.tsxからhistoryを渡す
export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      // X react-router-reduxのReducer
      // -> connected-react-routerのconnectRouter(history)
      router: connectRouter(history)
    }),
    applyMiddleware(
      logger,
      thunk,
      // reduxのapplymiddleware
      // connected-react-routerのrouterMiddleware(history)
      routerMiddleware(history)
    )
  );
}

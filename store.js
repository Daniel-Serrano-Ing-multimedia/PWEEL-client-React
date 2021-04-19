import { createStore, applyMiddleware, compose } from 'redux';
// reducers
import rootReducer from './reducers';
// midlewares
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let preLoadState ;

if (typeof window !== "undefined") {
  const authToken = window.localStorage.getItem('authToken');
  if ( authToken ) {
    preLoadState = {
      authReducer:{
        token  : authToken
      }
    }  
  }
}
// middlewares - compose withd devtool + thunk for async behaviour
const composedEnhancer = composeWithDevTools( applyMiddleware( thunk ) );
//store
const store = createStore( rootReducer, preLoadState, composedEnhancer);

export default store;
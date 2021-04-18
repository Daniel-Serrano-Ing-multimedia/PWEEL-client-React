import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

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
// middlewares
const composedEnhancer = composeWithDevTools();
//store
const store = createStore( rootReducer, preLoadState, composedEnhancer);

export default store;
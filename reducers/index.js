import { combineReducers } from 'redux';
// Slice Reducers
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({ 
  authReducer
});

export default rootReducer;
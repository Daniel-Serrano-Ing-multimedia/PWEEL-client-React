import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
} from '../types';

const initialState = {
  error: false,
  message: null,
  loading : false,
  user: null,
  token: null,
  isauthenticated: false,
}

const authReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        message : action.payload,
        error : null
      }
    case REGISTRO_ERROR:
      return {
        ...state,
        message : action.payload.message,
        error : action.payload.error
      }
    default:
      return state;
  }
}

export default authReducer;
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  LOGIN_ERREOR
} from '../types';

const initialState = {
  error: false,
  message: null,
  loading : false,
  user: null,
  token: null,
  isauthenticated: false,
  refreshToken : null,
}

const authReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        message : payload,
        error : null
      }
    case LOGIN_ERREOR:
    case REGISTRO_ERROR:
      return {
        ...state,
        message : payload,
        error : true
      }
    case LOGIN_EXITOSO:
      localStorage.setItem( 'authToken', payload.accessToken );
      return{
        ...state,
        token : payload.accessToken,
        message: payload.message,
        refreshToken: payload.refreshTosken,
        isauthenticated : true,
        error: false
      }
    default:
      return state;
  }
}

export default authReducer;
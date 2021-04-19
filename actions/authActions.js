import clienteAxios from '../config/axios';
// types
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LOGIN_EXITOSO,
  LOGIN_ERREOR
} from '../types';

/*********************************************************************************/
/*****************************  Actions Registro  ********************************/
/*********************************************************************************/
// action registro exitoso
export const registroExitoso = message => ({
  type: REGISTRO_EXITOSO,
  payload : message
});
// action registro fallido
export const registroFallido = error => ({
  type: REGISTRO_ERROR,
  payload : error,
});

// async action creator Registro
export const registrarUsuario = userData => {
  return async ( dispatch ) => {
    try {
      const result = await clienteAxios.post( '/pweel-api/v1/sign-up', userData );
      dispatch ( registroExitoso( result.data.message ) );
    } catch (error) {
      dispatch ( registroFallido( error.response.data.message ) );
    }
  }
}

/*********************************************************************************/
/*****************************  Actions Login  ***********************************/
/*********************************************************************************/
// action login exitoso
export const loginExitoso = result => ({
  type: LOGIN_EXITOSO,
  payload : result
});
// action login fallido
export const loginFallido = error => ({
  type: LOGIN_ERREOR,
  payload : error
});

// async action login
export const loginUsuario = userData => {
  return async ( dispatch ) => {
    try {
      console.log(' consultar... ');
      const result = await clienteAxios.post( '/pweel-api/v1/sign-in', userData );
      console.log( ' result : ', result.data )
      dispatch ( loginExitoso( result.data ) );
    } catch (error) {
      console.log( ' error : ', error )
      dispatch ( loginFallido( error.response.data.message ) );
    }
  }
}
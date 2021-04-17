import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
} from '../types';

/*********************************************************************************/
/*****************************  Actions Registro  ********************************/
/*********************************************************************************/
export const registroExitoso = ( ) => ({
  type: REGISTRO_EXITOSO,
  payload : 'Usuario Registrado con exito'
})

export const registroFallido = ( error ) => ({
  type: REGISTRO_ERROR,
  payload : { 
    message:'No se ha podido completar el registro',
    error
  }
})
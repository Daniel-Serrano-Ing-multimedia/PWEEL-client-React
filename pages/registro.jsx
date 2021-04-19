import React, { useEffect } from 'react';
//redux
import store from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuario } from '../actions/authActions';
//components
import InputField from '../components/InputField';
//styles
import styles from '../styles/Forms.module.scss';
// validaciones
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registro = () => {
  const authState = useSelector ( state => state.authReducer );
  // 
  const dispatch = useDispatch();
   // *******************************************
  // ***************** useEffect ***************
  // *******************************************
  useEffect(() => {
    console.log( 'newstate efect ', authState )
  }, [ authState ]);
  // *******************************************
  // ***************** Formik ******************
  // *******************************************
  const formik = useFormik({
    initialValues :{
      name : '',
      lastname : '',
      email : '',
      cellphone : '',
      password : '',
      confirmPassword : '',
    },
    validationSchema: Yup.object({
      name : Yup.string().required('El nombre es Obligatorio'),
      email : Yup.string() .email('El Email no es valido')
      .required('El Email es Obligatorio'),
      password : Yup.string()
        .required('El password es obligatorio')
        .min( 6, 'el Password debe ser de almenos 6 caracteres' ),
      confirmPassword : Yup.string()
        .oneOf([Yup.ref('password'), null], 'Los passwords no coinciden'),
    }),
    onSubmit: async valores =>{
      console.log(' valores ');
      dispatch( registrarUsuario( valores ) );
      //console.log( 'newstate'  ,store.getState( authState) )
    }
  });


  return (
    <form
      className = { styles.form}
      onSubmit = { formik.handleSubmit }
      data-cy = 'registro-form'
      >
      <h2  
        data-cy = 'registro-title'
        className = { styles.form_title }
      >Registrarse</h2>
      <div className = { styles.form_container }>          
        <div  className = { styles.form_container_inputs }>
          < InputField
            inputField = 'name'
            placeholder = 'Cual es tu Nombre'
            label = 'Nombres :'
            type = 'text' 
            value = { formik.values.name }
            error = { formik.errors.name }
            touched = { formik.touched.name }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          />
          < InputField
            inputField = 'lastname'
            placeholder = 'Cual es tu Apellido'
            label = 'Apellidos :'
            type = 'text' 
            value = { formik.values.lastname }
            error = { formik.errors.lastname }
            touched = { formik.touched.lastname }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          />
          < InputField
            inputField = 'email'
            placeholder = 'example@example'
            label = 'Email :'
            type = 'email' 
            value = { formik.values.email }
            error = { formik.errors.email }
            touched = { formik.touched.email }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          />
          < InputField
            inputField = 'cellphone'
            placeholder = 'Cual es tu Apellido'
            label = 'No. de telefono :'
            type = 'text' 
            value = { formik.values.cellphone }
            error = { formik.errors.cellphone }
            touched = { formik.touched.cellphone }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          /> 
          < InputField
            inputField = 'password'
            placeholder = 'paswword'
            label = 'PAssword :'
            type = 'password' 
            value = { formik.values.password }
            error = { formik.errors.password }
            touched = { formik.touched.password }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          />
          < InputField
            inputField = 'confirmPassword'
            placeholder = 'Confirma el passwordo'
            label = 'Confirma Password :'
            type = 'password' 
            value = { formik.values.confirmPassword }
            error = { formik.errors.confirmPassword }
            touched = { formik.touched.confirmPassword }
            handleChange = { formik.handleChange }
            handleBlur = { formik.handleBlur }
          />
        </div>
          <input 
            data-cy = 'registro-input-submit'
            type="submit"
            className = { styles.form_submit }
            value = 'Registrarse'
           />
      </div>
    </form>
  );
}
 
export default Registro;
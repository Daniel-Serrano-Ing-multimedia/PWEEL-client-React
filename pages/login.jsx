import React, { useEffect } from 'react';
// router
import { useRouter } from 'next/router';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../actions/authActions';
//components
import InputField from '../components/InputField';
//styles
import styles from '../styles/Forms.module.scss';
// validaciones
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = (  ) => {
  // Routing
  const router = useRouter();
  // 
  const authState = useSelector ( state => state.authReducer );
  const dispatch = useDispatch();
  // *******************************************
  // ***************** useEffect ***************
  // *******************************************
  useEffect(() => {
    console.log( 'newstate efect ', authState )
    if( authState.isauthenticated ){ 
        router.push( '/' );
    }
  }, [ authState ]);
  // *******************************************
  // ***************** Formik ******************
  // *******************************************
  const formik = useFormik({
    initialValues :{
      email : '',    
      password : '',
    },
    validationSchema: Yup.object({
      email : Yup.string() .email('El Email no es valido')
      .required('El Email es Obligatorio'),
      password : Yup.string()
        .required('El password es obligatorio')
    }),
    onSubmit: async valores =>{
      console.log(' valores ');
      dispatch( loginUsuario( valores ) );
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
    >Accede</h2>
    <div className = { styles.form_container }>          
      <div  className = { styles.form_container_inputs }>
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
      </div>
        <input 
          data-cy = 'registro-input-submit'
          type="submit"
          className = { styles.form_submit }
          value = 'Acceder'
         />
    </div>
  </form>
   );
}
 
export default Login;
import React from 'react';
//redux
import store from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { registroExitoso } from '../actions/authActions';
//styles
import styles from '../styles/Forms.module.scss';
// validaciones
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registro = () => {
  const productoEditar = useSelector ( state => state.authReducer );
  // 
  const dispatch = useDispatch();
  //Formik
  const submit = ( data ) => {
    console.log( data );
  }
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
    onSubmit: valores =>{
      console.log(' valores ');
      console.log( 'state'  ,store.getState() )
      dispatch( registroExitoso() );
      console.log( 'newstate'  ,store.getState() )
    }
  });


  return (
    <form
        className = { `${styles.form}`}
        onSubmit = { formik.handleSubmit }
        data-cy = 'registro-form'
        >
          <h2  
            data-cy = 'registro-title'
            className = { styles.form_title }
          >Registrarse</h2>
        <div
          className = { `${styles.form_container}` }
        >
          <div className = { `${styles.form_field} col-12-sm col-6-lg` } >
            <label 
              htmlFor = 'name'>Nombres</label>
            <input 
              data-cy = 'registro-input-name'
              id= 'name'
              type = 'text'
              placeholder = 'Cual es tu nombre ?'
              value = { formik.values.name }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
          { formik.touched.name && formik.errors.name?
              <div className = ''>
                <p className =''>Error</p>
                <p >{ formik.errors.name }</p>
              </div>
            : null
          }
          <div className = { `${styles.form_field} col-12-sm col-6-lg` } >
            <label 
              htmlFor = 'lastname'>Apellidos :</label>
            <input 
              data-cy = 'registro-input-lastname'
              id= 'lastname'
              type = 'text'
              placeholder = 'Cual es tu apellido ?'
              value = { formik.values.lastname }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
            { formik.touched.lastname && formik.errors.lastname?
                <div className = ''>
                  <p className =''>Error</p>
                  <p >{ formik.errors.lastname }</p>
                </div>
              : null
            }

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'email'>E-mail :</label>
            <input 
              data-cy = 'registro-input-email'
              id= 'email'
              type = 'email'
              placeholder = 'example@example.com'
              value = { formik.values.email }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
            { formik.touched.email && formik.errors.email?
                <div className = ''>
                  <p className =''>Error</p>
                  <p >{ formik.errors.email }</p>
                </div>
              : null
            }

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'cellphone'>Cellphone :</label>
            <input 
              id= 'cellphone'
              type = 'text'
              placeholder = '15415852'
              value = { formik.values.cellphone }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
            { formik.touched.cellphone && formik.errors.cellphone?
                <div className = ''>
                  <p className =''>Error</p>
                  <p >{ formik.errors.ecllphone }</p>
                </div>
              : null
            }
          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'password'>password :</label>
            <input 
              data-cy = 'registro-input-password'
              id= 'password'
              type = 'password'
              placeholder = 'password'
              value = { formik.values.password }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
           { formik.touched.password && formik.errors.password?
                <div className = ''>
                  <p className =''>Error</p>
                  <p >{ formik.errors.password }</p>
                </div>
              : null
            }

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'password'>Confirmar password :</label>
            <input 
              data-cy = 'registro-input-confirmPassword'
              id= 'confirmPassword'
              type = 'password'
              placeholder = 'Confirmar password'
              value = { formik.values.confirmPassword }
              onChange = { formik.handleChange }
              onBlur = { formik.handleBlur }
            />
          </div>
            { formik.touched.confirmPassword && formik.errors.confirmPassword?
                <div className = ''>
                  <p className =''>Error</p>
                  <p >{ formik.errors.confirmPassword }</p>
                </div>
              : null
            }
        </div>
          <input 
            data-cy = 'registro-input-submit'
            type="submit"
            className = { styles.form_submit }
            value = 'Registrarse'
           />
      </form>
  );
}
 
export default Registro;
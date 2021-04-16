import { FormikConsumer } from 'formik';
import React from 'react';
//styles
import styles from '../styles/Forms.module.scss';

const Registro = () => {
  return (
    <div className = { `${styles.form}`}>
      <h2 className = { styles.form_title }>Registrarse</h2>
      <form
        className = { `${styles.form_container}` }
      >
        
          <div className = { `${styles.form_field} col-12-sm col-6-lg` } >
            <label 
              htmlFor = 'name'>Nombres</label>
            <input 
              //className = {}
              id= 'name'
              type = 'text'
              placeholder = 'Cual es tu nombre ?'
              //value = {}
              //onChange = {}
            />
          </div>
          <div className = { `${styles.form_field} col-12-sm col-6-lg` } >
            <label 
              htmlFor = 'lstname'>Apellidos :</label>
            <input 
              //className = {}
              id= 'lastname'
              type = 'text'
              placeholder = 'Cual es tu nombre ?'
              //value = {}
              //onChange = {}
            />
          </div>

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'email'>E-mail :</label>
            <input 
              //className = {}
              id= 'email'
              type = 'email'
              placeholder = 'example@example.com'
              //value = {}
              //onChange = {}
            />
          </div>

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'cellphone'>Cellphone :</label>
            <input 
              //className = {}
              id= 'cellphone'
              type = 'number'
              placeholder = '15415852'
              //value = {}
              //onChange = {}
            />
          </div>

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'password'>password :</label>
            <input 
              //className = {}
              id= 'password'
              type = 'password'
              placeholder = 'password'
              //value = {}
              //onChange = {}
            />
          </div>

          <div className = {  `${styles.form_field}  col-12-sm col-6-lg `} >
            <label 
              htmlFor = 'password'>Confirmar password :</label>
            <input 
              //className = {}
              id= 'password'
              type = 'password'
              placeholder = 'Confirmar password'
              //value = {}
              //onChange = {}
            />
          </div>
          <button 
            type="submit"
            className = { styles.form_submit }
          > Registrarme</button>
       
      </form>
    </div>
  );
}
 
export default Registro;
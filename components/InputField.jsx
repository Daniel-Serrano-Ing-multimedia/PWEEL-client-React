import React from 'react';
//styles
import styles from '../styles/Forms.module.scss';

const InputField = ({ inputField, placeholder, label, type, value ,error, touched, handleChange, handleBlur }) => {
  return ( 
    <div className = { `${styles.form_field} col-12-sm col-6-lg` } >
      <label 
        htmlFor = { inputField } >{ label }</label>
      <input 
        data-cy = {`registro-input-${ inputField }`}
        id= { inputField }
        type = { type }
        placeholder = { placeholder }
        value = { value }
        onChange = { handleChange }
        onBlur = { handleBlur }
      />
    { touched && error?
        <div className = ''>
          <p className =''>Error</p>
          <p >{ error }</p>
        </div>
      : null
    }
    </div>
  );
}
 
export default InputField;
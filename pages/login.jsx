import React from 'react';
import styles from '../styles/Forms.module.scss';

const Login = () => {
  return ( 
    <div className = { styles.form }>
      <div>
        <div className = 'campo' >
          <label>Nombre :</label>
        </div>
      </div>
    </div>
   );
}
 
export default Login;
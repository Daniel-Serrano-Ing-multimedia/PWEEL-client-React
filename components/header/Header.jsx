import React, { useEffect } from 'react';
// routing
import { useRouter } from 'next/router';
// components
import Navbar from './Navbar';
import User from './User';
//styles
// redux
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Header.module.scss';

const Header = () => {
  // *******************************************
  // ***************** Redux ********************
  // *******************************************
  // store
  const authState = useSelector( state => state.authReducer );
  // dispatch 
  const dispatch = useDispatch();
  // *******************************************
  // ***************** useEffect ***************
  // *******************************************
  useEffect(() => {
  }, [ authState ]);
  // *******************************************
  // **************** Routes *******************
  // *******************************************
  const router = useRouter();
  const redireccionar = () => {
    router.push( '/' );
  }

  return ( 
    <div className = { styles.header }>
        <h1
          onClick ={ () => redireccionar()}>PWEEL</h1>  
      { authState.isauthenticated ?  
          <User 
          userName = { authState.user.name }
          /> 
          : 
          <Navbar/> 
      }
    </div>
  );
}
 
export default Header;
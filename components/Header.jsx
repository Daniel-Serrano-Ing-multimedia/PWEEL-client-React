import React from 'react';
// routing
import { useRouter } from 'next/router';
// components
import Navbar from '../components/Navbar';
//styles
import styles from '../styles/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const redireccionar = () => {
    router.push( '/' );
  }

  return ( 
    <div className = { styles.header }>
        <h1
          onClick ={ () => redireccionar()}>PWEEL</h1>  
      <Navbar/>
    </div>
  );
}
 
export default Header;
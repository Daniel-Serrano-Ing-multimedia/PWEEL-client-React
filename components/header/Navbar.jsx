import React from 'react';
// routing
import Link from 'next/link';
 //styles
import styles from '../../styles/Header.module.scss';

const NavBar = () => {
  return ( 
    <nav className = { styles.navbar }>
      <>
        <Link href = '/login'>
          <a className = 'bg-red-400 px-5 py-3 rounded-lg text-white font-bolf uppercase mr-2'>
            Iniciar Sesion</a>
        </Link>
      
        <Link href = '/registro'>
          <a className = 'bg-black px-5 py-3 rounded-lg text-white font-bolf uppercase'
          >Crear Cuenta</a>
        </Link>
      </>
    </nav>
   );
}
 
export default NavBar;
import React from 'react';
// next
import Head from 'next/head'
// componets
import Header from './Header';

const Layout = ({ children }) => {
  return ( 
    <>
      <Header/>
      <main>
        { children }
      </main>  
    </>
   );
}
 
export default Layout;
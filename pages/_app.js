import React from 'react';
// components
import Layout from '../components/Layout';
// style
import '../styles/globals.scss';
import '../styles/simple-grid.scss';


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

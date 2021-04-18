import React from 'react';
//redux
import { Provider } from 'react-redux';
import store from '../store'
// components
import Layout from '../components/Layout';
// style
import '../styles/globals.scss';
import '../styles/simple-grid.scss';


function MyApp({ Component, pageProps }) {
  return(
    <Provider
      store = { store }
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

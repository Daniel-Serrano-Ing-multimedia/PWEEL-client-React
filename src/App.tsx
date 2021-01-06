import React from 'react';

// routeting
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Iroute, Ilayaout } from './interfaces/routes';
import layaoutesRoutes from './config/routes';
// estilos
import './App.scss';

import MainLayaout from './layaouts/MainLayaout/MainLayaout';
import AdminLayaout from './layaouts/AdminLayaout/AdminLayaout';


// Type Props
const main: Ilayaout = layaoutesRoutes[0];
const admin: Ilayaout = layaoutesRoutes[1];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route
            path={main.path}
            exact={main.exact}
            strict = { main.strict }
          >
            <MainLayaout routes = { main.routes } />
          </Route>
          <Route
            path={admin.path}
            exact={admin.exact}
          >
            <AdminLayaout routes = { admin.routes }/>
        </Route>
      </Switch>
        
        

    </BrowserRouter>
  );
}

export default App;

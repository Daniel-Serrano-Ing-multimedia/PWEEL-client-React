import React, { useState, FunctionComponent } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Switch as BluePrintSwitch } from '@blueprintjs/core';

import HomePage from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
//interfaces
import { Ilayaout, Iroute, layaoutProps } from '../../interfaces/routes';


const MainLayaout: React.FC<layaoutProps> = ({ routes }) => {
  console.log("Routes : ", routes);
  return ( 
    <div>
      <h2>Header ...</h2>

        <Route
          path="/login"
          exact = {true}
        >
          <Login></Login>
        </Route> 

      <h2>Footer</h2>
    </div>
   );
}
 

const LoadRoutes = ({ routes }: layaoutProps) => {
  return <Switch>
          {routes.map( (route, index) => (
              <Route
                  key = { index }
                  path = { route.path }
                  exact = { route.exact }
                  component = { route.Component }
              />
          ))}
      </Switch>;
}

export default MainLayaout;


            

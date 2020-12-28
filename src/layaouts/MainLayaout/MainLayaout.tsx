import React, { useState, FunctionComponent } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
//interfaces
import { Ilayaout, Iroute, layaoutProps } from '../../interfaces/routes';

import './MainLayaout.scss'

const MainLayaout: React.FC<layaoutProps> = ({ routes }) => {
  return ( 
    <div>
      <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>PWEEL</Navbar.Heading>
            <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align = { Alignment.RIGHT } >
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <LoadRoutes
        routes = { routes }
      />
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


            

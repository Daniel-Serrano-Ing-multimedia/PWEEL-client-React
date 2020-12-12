import React from 'react';

// routeting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import MainLayaout from './layaouts/MainLayaout/MainLayaout';
// estilos
import './App.scss';

import { Icon, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import HomePage from './pages/Home/Home';

const RouterWithSubRoutes = (route) => {
  const { path, exact, componet: RouteComponent, routes } = route;
  return (
    <Route
      path = { path }
      exact = { exact }
      render = { props => <RouteComponent routes = { routes } {...props}/>}
    />
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        {
          routes.map(( route, index ) => {
            <RouterWithSubRoutes
              key={index}
              { ...route }
            />
          } )
        }
      </Switch>
    </Router>
  );
}

export default App;

//Layaouts
import MainLayaout, { MainLayaoutProps } from '../layaouts/MainLayaout/MainLayaout';

// Pages
import HomePage from '../pages/Home/Home';
// Pages

//others

const routes = [
  {
    path      : "/",
    component : MainLayaout,
    exact      : true,
    routes    : [
      {
        path      : "/home-page",
        component : HomePage,
        exact     : true
      },
      {
        path      : "/login",
        component : HomePage,
        exact     : true
      }
    ]
  }
];

export default routes;
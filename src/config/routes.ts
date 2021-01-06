//Layaouts
import MainLayaout from '../layaouts/MainLayaout/MainLayaout';
import AdmiLayaout from '../layaouts/AdminLayaout/AdminLayaout';
import { Ilayaout } from '../interfaces/routes';
// Pages
import HomePage from '../pages/Home/Home';
import Login from '../pages/Login/Login';
// interface

//others

const layaoutesRoutes : Ilayaout[] = [
  {
    path              : "/",
    LayaoutComponent  : MainLayaout,
    exact: true,
    strict: true,
    routes            : [
      {
        path      : "/",
        Component : HomePage,
        exact     : true
      },
      {
        path      : "/login",
        Component : Login,
        exact     : true
      }
    ]
  },
  {
    path              : "/admin",
    LayaoutComponent  : AdmiLayaout,
    exact: false,
    strict: true,
    routes            : [
      {
        path      : "/login",
        Component : Login,
        exact     : true
      }
    ]
  }
];

export default layaoutesRoutes;
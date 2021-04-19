import React from 'react';
const User = ({ userName, userLastname }) => {

  return ( 
    <div >
      <p>Hola { userName }</p>
      <a className = 'bg-black px-5 py-3 rounded-lg text-white font-bolf uppercase'
      >Cerrar Sesion</a>
    </div>
   );
}
 
export default User;
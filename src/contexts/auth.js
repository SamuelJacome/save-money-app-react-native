import React, { useState, createContext } from 'react';

export const AuthContext = createContext( {} );


function AuthProvider ({ children }){

    const [user, setUser] = useState({
        nome: 'Samuel',
        uid: '21321321321'
    })
  return (
      <AuthContext.Provider value={{user}}>
          {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;
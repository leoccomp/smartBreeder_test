import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
  logged: boolean,
  signIn(): void;
  signOut(): void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@smartbreeder:logged');

    return !!isLogged;
  });

  const signIn = () => {
    setLogged(true);
  };

  const signOut = () => {
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{logged, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
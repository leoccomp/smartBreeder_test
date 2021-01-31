import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import history from '../services/history';

interface IAuthContext {
  logged: boolean,
  signIn(email: string, password: string): void;
  signOut(): void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@my-cashFlow:logged');

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === 'leo@leo.com' && password === '123456') {
      localStorage.setItem('@my-cashFlow:logged', 'true');
      setLogged(true);
      toast.success('Logado com sucesso!!');
      history.push('/dashboard');
    } else {
      toast.error('Usuário ou senha inválidos!!');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@my-cashFlow:logged');
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
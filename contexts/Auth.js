import { createContext, useState } from 'react';
import { signIn, signUp } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logado: false,
  });

  const login = async (email, senha) => {
    try {
      await signIn(email, senha);
      setUser({ email, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    setUser({
      logado: false,
    });
  };

  const register = async (email, senha, nome, telefone) => {
    try {
      await signUp(nome, email, senha, telefone); // Incluindo o telefone
      setUser({ email, nome, telefone, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const contexto = {
    user,
    login,
    logout,
    register,
  };
  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };

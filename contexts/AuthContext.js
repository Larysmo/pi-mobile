import { createContext, useState } from 'react';
import { signIn, signUp, getUser } from '../services/AuthService';
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logado: false,
    nome: '',
    email: '',
    telefone: '',
    userId: '',
  });

  const [error, setError] = useState([]);

  const login = async (email, senha) => {
    try {
      await signIn(email, senha);
      const dadosAtuais = await getUser();
      setUser({ ...dadosAtuais, logado: true });
      setError(null);
      console.log('Dados do usuário no context:', dadosAtuais);

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
      await signUp(nome, email, senha, telefone);
      const dadosAtuais = await getUser()
      console.log('Dados após o registro no context:', dadosAtuais);
      setUser({ ...dadosAtuais, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log('Não recebeu Dados do usuário após o registro');
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      register,
      login, 
      logout,    
    }}>
      {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
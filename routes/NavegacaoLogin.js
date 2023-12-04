import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecuperarSenha from '../screens/RecuperarSenha';
import CadastroUsuario from '../screens/CadrastroUsuario';
import Login from '../screens/Login';
import MenuNavigator from './MenuNavigator';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const NavegacaoLogin = () => {
  const {user} =  useContext(AuthContext);

  return (
    <Stack.Navigator>
      {!user.logado ? (
        <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        </>
      ):(
      <Stack.Screen name="Inicio" component= {MenuNavigator} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

export default NavegacaoLogin
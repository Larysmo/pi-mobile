import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecuperarSenha from '../screens/RecuperarSenha';
import CadastroUsuario from '../screens/CadrastroUsuario';
import Login from '../screens/Login'
import MenuNavigator from './MenuNavigator'


const Stack = createNativeStackNavigator();

const NavegacaoLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="Inicio" component= {MenuNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default NavegacaoLogin
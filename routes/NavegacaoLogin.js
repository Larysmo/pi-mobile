import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecuperarSenha from '../screens/RecuperarSenha';
import CadastroUsuario from '../screens/CadrastroUsuario';

const Stack = createNativeStackNavigator();

const NavegacaoLogin = () => {
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
    </Stack.Navigator>
  )
}

export default NavegacaoLogin
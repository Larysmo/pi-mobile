import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated'
import NavegacaoAbaHome from './Routes/NavegacaoAbaHome.js'


import Login from './screens/Login';
import Home from './screens/Home';
import CadastroUsuario from './screens/CadrastroUsuario';
import RecuperarSenha from './screens/RecuperarSenha';
import FlatList from './screens/FlatList';


const Stack = createStackNavigator();

function App() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
              <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="App" component={NavegacaoAbaHome} />
              <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
              <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />       
              <Stack.Screen name="FlatList" component={FlatList} />       
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
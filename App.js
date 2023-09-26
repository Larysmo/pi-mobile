import 'react-native-gesture-handler';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import CadastroUsuario from './screens/CadrastroUsuario';
import RecuperarSenha from './screens/RecuperarSenha';


const Stack = createStackNavigator();

function App() {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {logado ? (
            <Stack.Screen name="Home">
              {() => <Home onLogout={handleLogout} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CadastrarUsuario" component={CadastroUsuario} />
              <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

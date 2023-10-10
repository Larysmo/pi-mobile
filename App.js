import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavegacaoLogin from './routes/NavegacaoLogin'


function App() {
  return (
    <NavigationContainer>
        <NavegacaoLogin/>
    </NavigationContainer>

  );
}

export default App;
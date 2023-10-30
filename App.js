import { NavigationContainer } from '@react-navigation/native';
import NavegacaoLogin from './routes/NavegacaoLogin';
import AuthProvider from './contexts/Auth';





export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavegacaoLogin/>
      </AuthProvider>
    </NavigationContainer>
  );
}

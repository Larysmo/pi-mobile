import { NavigationContainer } from '@react-navigation/native';
import NavegacaoLogin from './routes/NavegacaoLogin';
import AuthProvider from './contexts/AuthContext';
import PetProvider from './contexts/PetContext';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PetProvider>
          <NavegacaoLogin/>
        </PetProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

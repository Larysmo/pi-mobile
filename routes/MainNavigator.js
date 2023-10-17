import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Home';
import CuidadorEscolha from '../screens/CuidadorEscolha';
import CuidadorAgendamento from '../screens/CuidadorAgendamento';
import Perfil from '../screens/Perfil';
import PerfilEditar from '../screens/PerfilEditar';
import PerfilEditarPet from '../screens/PerfilEditarPet';
import PerfilCadastrarPet from '../screens/PerfilCadastrarPet';


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Home" component = {Home} />
      <Stack.Screen name= "CuidadorEscolha" component = {CuidadorEscolha} /> 
      <Stack.Screen name= "CuidadorAgendamento" component = {CuidadorAgendamento} /> 
      <Stack.Screen name= "Perfil" component = {Perfil} /> 
      <Stack.Screen name= "PerfilEditar" component = {PerfilEditar}/>
      <Stack.Screen name= "PerfilEditarPet" component = {PerfilEditarPet}/>
      <Stack.Screen name= "PerfilCadastrarPet" component = {PerfilCadastrarPet}/>
    </Stack.Navigator>
  );
}  

export default MainNavigator

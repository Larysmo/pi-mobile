import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator ();

function NavegacaoHomeAba () {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Buscar" />
      <Tab.Screen name="Agenda" />
      <Tab.Screen name="Perfil" />
      <Tab.Screen name="Sobre" />
    </Tab.Navigator>
  );
}
export default NavegacaoHomeAba
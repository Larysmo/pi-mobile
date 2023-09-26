import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator ();

const NavegacaoHomeAba = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Login} />
      <Tab.Screen name="Buscar" component={Login}/>
      <Tab.Screen name="Agenda" component={Login}/>
      <Tab.Screen name="Perfil" component={Login} />
      <Tab.Screen name="Sobre" component={Login}/>
    </Tab.Navigator>
  )
}

export default NavegacaoHomeAba
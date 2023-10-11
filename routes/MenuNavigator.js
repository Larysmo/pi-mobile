import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainNavigator  from './MainNavigator'
import {View, Button } from 'react-native';

import estilos from '../components/estilos'

const Tab = createBottomTabNavigator ();

function TabBar({ navigation }) {
  return (
    <View style={estilos.menuBotoes}>
    <Button
      title="Inicial"
      onPress={() => {
      navigation.navigate('Home');
      }}
    />
    <Button
      title="Novo"
      onPress={() => {
      navigation.navigate('CuidadorEscolha');
      }}
    />
    <Button
      title="Perfil"
      onPress={() => {
      navigation.navigate('Perfil');
      }}
    />
    </View>
  );
}


export default function MenuNavigator () {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Main" component={MainNavigator} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

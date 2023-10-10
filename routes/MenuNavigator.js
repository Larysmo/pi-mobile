import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './MainNavigator'
import {View, Button, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator ();

function TabBar({ navigation }) {
  return (
    <View style={estilos.MenuBotoes}>
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


const MenuNavigator = () => {
  return (
    <Tab.Navigator tabBar={TabBar} >
      <Tab.Screen name="Main" component={MainNavigator} />
    </Tab.Navigator>
  );
};

export default MenuNavigator



const estilos = StyleSheet.create=({
  MenuBotoes: {
    flexDirection: "row",
  }
})
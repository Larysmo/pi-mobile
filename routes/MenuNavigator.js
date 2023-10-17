import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './MainNavigator';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabBar({ navigation }) {
  return (
    <View style={estilos.menuBotoes}>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Home')}
      >
      <Ionicons name="home-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('CuidadorEscolha')}
      >
      <Ionicons name="add-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Perfil')}
      >
      <Ionicons name="person-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default function MenuNavigator() {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


const estilos = StyleSheet.create({
  menuBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 60, 
    borderTopWidth: 1,
    borderTopColor: 'orange',
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

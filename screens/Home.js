import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavegacaoAbaHome from '../Routes/NavegacaoAbaHome';

import Pet1 from '../assets/caramelo.jpg';
import Pet2 from '../assets/gatopreto.png';


const Home = (props) => {
const navigation = useNavigation();


  const handleSair = () => {
    navigation.navigate('Login')
  }


  return(
    <View style={{ flex:1 }}>
      <Appbar.Header>
        <Appbar.Content title="Olá, @tutor"/>
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={24} color="black"/>}
          onPress={handleSair} 
        />
        </Appbar.Header>
        <View style={estilos.container}>
          <View style={estilos.quadrado}>
           <View style={estilos.busca}>
            <Text style={estilos.titulo}> Buscar Cuidador</Text>
            <TextInput
              style={estilos.input}
              label="Cidade Satélite"
          />
          </View>
          <View style={estilos.lista}>
          <Text style={estilos.titulo}> Seus Pets:</Text>
            <View style={estilos.pet}>
              <Image source={Pet1}/>
            </View>
            <View style={estilos.pet}>
              <Image source={Pet2}/>
            </View>
          </View>
          </View>
        </View>
   <NavegacaoAbaHome />
    </View>
  );
};


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    height: '70%',
  },
  busca:{
    flex:1,
    alignItems:"center"

  },
  lista:{
    flex:2
  },
  titulo: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
  },
  input:{
    width:150,
    height:50,
  },
  pet:{
    border:1,
    padding:5
  }
})


export default Home
<<<<<<< HEAD
import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Pet1 from '../assets/caramelo.jpg';
import Pet2 from '../assets/gatopreto.png';
import estilos from '../components/estilos';

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
    </View>
  );
};



export default Home
=======
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavegacaoAbaHome from '../Routes/NavegacaoAbaHome';
import estilos from '../components/estilos';
import Pet1 from '../assets/caramelo.jpg';
import Pet2 from '../assets/gatopreto.png';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const handleSair = () => {
    navigation.navigate('Login');
  };
  const { email } = route.params;

const handleLista = () => {
    navigation.navigate('FlatList');
  };





  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title={`Olá, ${email}`} />
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={24} color="black" />}
          onPress={handleSair}
        />
      </Appbar.Header>
      <View style={estilos.container}>
        <View style={estilos.quadrado}>
          <View style={estilos.buscaHome}>
            <Text style={estilos.tituloHome}> Buscar Cuidador</Text>
          </View>
          <View style={estilos.homeBusca}>
            <TextInput style={estilos.homeInput} label="Cidade Satélite" />
            <TouchableOpacity style={estilos.homeBotao} onPress={handleLista}>
              <Text style={estilos.botaoTexto}>Ir</Text>
            </TouchableOpacity>
          </View>
          <View style={estilos.petLista}>
            <Text style={estilos.titulo}> Seus Pets:</Text>
            <View style={estilos.pet}>
              <Image source={Pet1} />
            </View>
            <View style={estilos.pet}>
              <Image source={Pet2} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
>>>>>>> ff94ad68f5ffe558da1554915f6c50e994a88349

import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Pet1 from '../assets/caramelo.jpg';
import Pet2 from '../assets/gatopreto.png';
import estilos from '../components/estilos';

const Perfil = (props) => {
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
            <Text style={estilos.titulo}> Seus Dados</Text>
          <Button
          Title={"Editar"}
          />
          </View>
          <View style={estilos.lista}>
          <Text style={estilos.titulo}> Seus Pets</Text>
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



export default Perfil
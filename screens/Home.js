import { View, Text, Image, Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Pet1 from '../assets/caramelo.jpg';
import Pet2 from '../assets/gatopreto.png';
import estilos from '../components/estilos';
import ListaAgenda from '../components/ListaAgenda'
import ListaPets from '../components/ListaPets'



const Home = (props) => {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };

  const cancelaAgendamento = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Olá, @tutor" />
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={24} color="black" />}
          onPress={handleSair}
        />
      </Appbar.Header>

      <View style={estilos.container}>
        <View style={estilos.quadrado}>
          <Text style={estilos.titulo}> Buscar Pet Sitter</Text>
          <View style={estilos.containerBuscatHome}>
            <TextInput style={estilos.inputHome} label="Escolha sua cidade" />
          </View>

          <Text style={estilos.titulo}> Agendamentos Confirmados</Text>
          <View style={estilos.containerAgendaHome}>
            <View style={estilos.agendaConfirmada}>
              <ListaAgenda />
              </View>

              <View style={estilos.agenda}>
            </View>
          </View>

          <Text style={estilos.titulo}> Seus Pets</Text>
          <View style={estilos.containerPetHome}>
            <View style={estilos.pet}>
              <ListaPets />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

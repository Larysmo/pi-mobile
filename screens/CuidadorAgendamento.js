import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilos from '../components/estilos';

const CuidadorAgendamento = (props) => {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };
  const handleAgendar = () => {
    alert('Agendamento realizado!');
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Olá, @tutor" />
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={18} color="black" />}
          onPress={handleSair}
        />
      </Appbar.Header>
      <View style={estilos.container}>
        <View style={estilos.quadrado}>
          <Text style={estilos.titulo}>Agendamento</Text>
          <View style={estilos.lista}>
            <TouchableOpacity
              style={estilos.botaoCuidador}
              onPress={handleAgendar}>
              <Text style={estilos.botaoTextoCuidador}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CuidadorAgendamento;

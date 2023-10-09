import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilos from '../components/estilos';

const CuidadorEscolha = (props) => {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };

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
          <Text style={estilos.titulo}>Buscar Cuidador</Text>
        </View>
      </View>
    </View>
  );
};

export default CuidadorEscolha;

import { View, Text, FlatList, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';import { Appbar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilos from '../components/estilos';

const CuidadorEscolha = (props) => {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };

  const cuidadores = [
  {
    id: "001",
    desc: ["Bruno Vaz", "Samambaia"]
  },
  {
    id: "002",
    desc: ["Saind", "Guará"]
  },
  {
    id: "003",
    desc: ["Laryssa", "Plano Piloto"]
  },
  {
    id: "004",
    desc: ["Iago", "Gama"],
  },
  {
    id: "005",
    desc: ["Bruno Vaz", "Samambaia"]
  },
  {
    id: "006",
    desc: ["Saind", "Guará"]
  },
  {
    id: "007",
    desc: ["Laryssa", "Plano Piloto"]
  },
  {
    id: "008",
    desc: ["Iago", "Gama"],
  }, 

]

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
          <Text style={estilos.titulo}>Buscar Cuidador</Text>
          <View style={estilos.lista}>
      <FlatList
        data={cuidadores}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <View style={estilos.listaCuidadores}>
          <Text>Nome: {item.desc[0]} - Local: {item.desc[1]} </Text>
         <TouchableOpacity
              style={estilos.botaoCuidador}
              onPress={() => 
              {
               navigation.navigate("CuidadorAgendamento")
              }}
            >
              <Text style={estilos.botaoTextoCuidador}>Agendar</Text>
            </TouchableOpacity>
        </View>
          } />
    </View>
        </View>
      </View>
    </View>
  );
};

export default CuidadorEscolha;

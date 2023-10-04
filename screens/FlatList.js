import { View, Text, FlatList, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import estilos from '../components/estilos'


export default function FlatListCuidadores({listaCuidadores}) {
  
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



                
 /*  const navigation = useNavigation() */

  return(
    <View style={estilos.lista}>
      <FlatList
        data={cuidadores}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <View style={estilos.listaCuidadores}>
          <Text>Nome: {item.desc[0]} - Local: {item.desc[1]} </Text>
         <TouchableOpacity
              style={estilos.botao}
              onPress={() => {
               /*  navigation.navigate("Agendamento") */
              }}
            >
              <Text style={estilos.botaoTexto}>Agendar</Text>
            </TouchableOpacity>
        </View>
          } />
    </View>
  )
}


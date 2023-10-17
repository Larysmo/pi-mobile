import { View, Text, FlatList,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../components/layoutBase';
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
  <LayoutBase>
  <ScrollView>
    <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={estilos.titulo}>Disponíveis para você </Text>
      <View style={estilos.linha}></View>
    </View>
          <View>
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
        </ScrollView>
      </LayoutBase>
  );
};

export default CuidadorEscolha;

import { View, Text,Alert, ScrollView } from 'react-native';
import { TextInput,  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import LayoutBase from '../components/layoutBase';

import estilos from '../components/estilos';
import ListaAgenda from '../components/ListaAgenda'
import ListaPets from '../components/ListaPets'
import { data } from '../components/ListaPets';

const Home = (props) => {
  const navigation = useNavigation();

  
  return (
    
    <LayoutBase>
      <ScrollView>
        <View>
          <Text style={estilos.titulo}> Buscar Pet Sitter</Text>
          <TextInput style={estilos.input} label="Escolha sua cidade" />
        </View>
        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={estilos.titulo}> Agendamentos Confirmados</Text>
          <View style={estilos.linha2}></View>
        </View>
        <View>
          <ListaAgenda />
        </View>
        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={estilos.titulo}> Seus Pets</Text>
          <View style={estilos.linha}></View>
        </View>
        <View style={{flex:1}}>
          <ListaPets
            data={data}
            exibirNome={true}
            exibirFoto={true} />
        </View>
      </ScrollView>
    </LayoutBase>
  );
};

export default Home;

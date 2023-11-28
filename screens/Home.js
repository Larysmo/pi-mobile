import { View, Text } from 'react-native';
import { TextInput,  } from 'react-native-paper';
import LayoutBase from '../components/layoutBase';

import estilos from '../components/estilos';
import ListaAgenda from '../components/ListaAgenda'
import ListaPets from '../components/ListaPets'

const Home = (props) => {
 
  return (
    
    <LayoutBase>
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
        <View style={{flex:1, flexDirection: 'row'}}>
        <ListaPets/>
        </View>
    </LayoutBase>
  );
};

export default Home;

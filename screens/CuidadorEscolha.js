import { View, Text, FlatList, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { Pressable } from 'react-native';
import { List, Avatar } from 'react-native-paper';


const CuidadorEscolha = (props) => {
  const navigation = useNavigation();
  const handleSair = () => {
    navigation.navigate('Login');
  };


  return (
  <LayoutBase>
  <ScrollView>
    <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={estilos.titulo}>Disponíveis para você </Text>
      <View style={estilos.linha}></View>
    </View>
      <View>
      <List.Item
        title="Bruno"
        description="Samambaia"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {navigation.navigate("CuidadorAgendamento")}}
      />

      <List.Item
        title="Iago"
        description="Gama"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {navigation.navigate("CuidadorAgendamento")}}
      />

      <List.Item
        title="Laryssa"
        description="Asa Sul"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {navigation.navigate("CuidadorAgendamento")}}
      />

      <List.Item
        title="Saind"
        description="Guará"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {navigation.navigate("CuidadorAgendamento")}}
      />

    </View>
        </ScrollView>
      </LayoutBase>
  );
};
export default CuidadorEscolha;
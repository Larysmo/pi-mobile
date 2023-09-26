import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Home = (props) => {
const navigation = useNavigation();


  const handleSair = () => {
    navigation.navigate('Login')
  }


  return(
    <View style={{ flex:1 }}>
      <Appbar.Header>
        <Appbar.Content title="Meu App" />
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={24} color="black"/>}
          onPress={handleSair} 
        />
      </Appbar.Header>
    </View>
  );
};
export default Home
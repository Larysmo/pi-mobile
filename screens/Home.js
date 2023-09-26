import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const Home = (props) => {
  return(
    <View style={{ flex:1 }}>
      <Appbar.Header>
        <Appbar.Content title="Meu App" />
        <Appbar.Action
          icon={() => <Ionicons name="exit-outline" size={24} color="black"/>}
          onPress={props.onLogout} 
        />
      </Appbar.Header>
    </View>
  );
};
export default Home
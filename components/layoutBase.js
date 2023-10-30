import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';



const LayoutBase = ({ children }) => {
  const navigation = useNavigation();
  const {user, logout} = useContext(AuthContext);

  const handleSair = () => {
  logout()
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View style={{ backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <Text>Olá, {user.email} </Text>
          <TouchableOpacity onPress={handleSair}>
            <Icon name="exit-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 0.9, backgroundColor: 'white',  }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default LayoutBase;

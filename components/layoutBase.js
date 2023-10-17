import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LayoutBase = ({ children }) => {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View style={{ backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <Text>Olá, usuário!</Text>
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

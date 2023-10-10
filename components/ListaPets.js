import { View, FlatList, Image, Text } from 'react-native';
import estilos from './estilos'

const ListaPets = () => {
  const data = [
    {
      id: '1',
      nome: 'Caramelo',
      imagem: require('../assets/caramelo.jpg'),
    },
    {
      id: '2',
      nome: 'Blackout',
      imagem: require('../assets/gatopreto.png'),
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={estilos.listaCuidadores}>
          <Image source={item.imagem} style={estilos.imagemPet} />
          <Text>{item.nome}</Text>
        </View>
      )}
    />
  );
};

export default ListaPets;
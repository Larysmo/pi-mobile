import { View, ScrollView, Image, Text, Pressable, StyleSheet } from 'react-native';
import PerfilEditarPet from '../screens/PerfilEditarPet';

import estilos from './estilos';


export const data = [
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
const ListaPets = ({ data, exibirNome, exibirFoto, onSelect, selectedPet }) => {
  return (
    <ScrollView horizontal>
      {data.map((pet) => (
        <Pressable key={pet.id} onPress={() => onSelect(pet)}>
          <View style={estilos.petItem}>
            {exibirFoto && pet.imagem && (
              <Image source={pet.imagem} style={estilos.petImage} />
            )}
            {exibirNome && <Text>{pet.nome}</Text>}

          </View>
        </Pressable >
      ))}
    </ScrollView>
  );
}
  export default ListaPets
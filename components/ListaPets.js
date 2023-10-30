import { View, ScrollView, Image, Text, Pressable, StyleSheet } from 'react-native';
import PerfilEditarPet from '../screens/PerfilEditarPet';


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
          <View style={styles.petItem}>
            {exibirFoto && pet.imagem && (
              <Image source={pet.imagem} style={styles.petImage} />
            )}
            {exibirNome && <Text>{pet.nome}</Text>}

          </View>
        </Pressable >
      ))}
    </ScrollView>
  );
	const styles = StyleSheet.create({
    petItem: {
      flexDirection: 'column',
      alignItems: 'center',
      margin: 10,
      justifyContent: 'center'
    },
    petImage: {
      width: 50,
      height: 50,
    },
  });
}
  export default ListaPets
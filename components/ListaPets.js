import { useContext } from 'react';
import { PetContext } from '../contexts/PetContext';
import { ScrollView, View, StyleSheet, Image, Text, Pressable, FlatList } from 'react-native';

const ListaPets = () => {
  // const contexto = useContext(ProdutoContext); //traz produtos e setProdutos (todo o contexto)
  const {pets} = useContext(PetContext); //traz apenas produtos

  return (
    <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
    <FlatList
    data={pets} 
    horizontal={true}
    keyExtractor={(item) => item.id} //busca elementos a partir de um elemento-chave. Neste caso, é o id. Sem ele não tem diferenciação de objetos
    renderItem={({item}) => ( //renderiza elementos da lista, conforme item passado no keyExtractor
      <ScrollView horizontal  > 
        <View>
          <Image source={item.imagem} style={styles.imagemPetLista}/>
          <Text> {item.nome} </Text>
        </View>
      </ScrollView> 
    )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  imagemPetLista: {
    height: 70,
    width: 70,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center'
  },
});

  export default ListaPets


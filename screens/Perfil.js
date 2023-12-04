import { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { AuthContext } from '../contexts/AuthContext';
import { PetContext } from '../contexts/PetContext';

const Perfil = () => {
  const navigation = useNavigation();
  const { pets, removerPet } = useContext(PetContext);

  const { user } = useContext(AuthContext);

  console.log('Dados do usuário no componente:', user);

  const handleEditar = () => {
    navigation.navigate('PerfilEditar');
  };

  const handleExcluirConta = async () => {
    // Lógica para excluir a conta
  };

  const handleCadastrarPet = () => {
    navigation.navigate('PerfilCadastrarPet');
  };

  return (
    <LayoutBase>
      <View>
        <ScrollView>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={estilos.titulo}> Seus Dados</Text>
            <View style={estilos.linha}></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <View>
              <Text>Nome: {user.nome}</Text>
              <Text>E-mail: {user.email}</Text>
              <Text>Telefone: {user.telefone}</Text>
              <Text>Id: {user.id}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleEditar}>
                <Text style={[estilos.botaoTextoCuidador, { marginBottom: 20 }]}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={estilos.botaoExcluir} onPress={handleExcluirConta}>
            <Text style={estilos.botaoTextoExcluir}>excluir</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={estilos.titulo}> Seus Pets</Text>
            <View style={estilos.linha}></View>
          </View>
          <ScrollView alwaysBounceVertical>
            {pets.map((pet) => (
              <List.Item
                key={pet.id}
                title={pet.nome}
                left={() => <Image source={pet.imagem} style={estilos.imagemPetLista} />}
                right={(props) => (
                  <View>
                    <IconButton
                      {...props}
                      icon="delete"
                      color="orange"
                      onPress={() => removerPet(pet.id)}
                    />
                    <IconButton
                      {...props}
                      icon="pencil"
                      color="orange"
                      onPress={() => navigation.navigate('PerfilEditarPet', { petId: pet.id })}
                    />
                  </View>
                )}
              />
            ))}
            <View style={estilos.containerPerfil}>
              <Pressable onPress={handleCadastrarPet}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={estilos.botaoTextoCuidador}></Text>
                  <Ionicons name="add-circle" size={50} color="orange" />
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutBase>
  );
};

export default Perfil;

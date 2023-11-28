import { View, Text, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { List, IconButton, FAB} from 'react-native-paper';


import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import ListaPets from '../components/ListaPets';
import { AuthContext } from '../contexts/Auth';
import { useContext, useEffect } from 'react';
import { deleteUser } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { PetContext } from '../contexts/PetContext';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

const Perfil = () => {
  const navigation = useNavigation();
  const {user, logout, register} = useContext(AuthContext);
  const { pets, removerPet } = useContext(PetContext);

  const handleEditar = () => {
    navigation.navigate('PerfilEditar');
  };
  
const handleEditarPet = () => {
  navigation.navigate('PerfilEditarPet');
  };
  
const handleExluirConta = async() => {
  const user = auth.currentUser;

    await deleteDoc(doc(db, "users", "user"));

    await deleteUser(user).then(() => {
      alert("Conta excluída!")
      logout()
    })
   .catch((error) => {});
  };

 const handleCadastrarPet = () => {
  navigation.navigate('PerfilCadastrarPet')
}
  return (
    <LayoutBase>
      <View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={estilos.titulo}> Seus Dados</Text>
            <View style={estilos.linha}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <View>
              <Text style={estilos.perfilTexto}>Nome: {user.nome}</Text>
              <Text style={estilos.perfilTexto}>E-mail: {user.email}</Text>
              <Text style={estilos.perfilTexto}>Telefone: {user.telefone}</Text>        
              <Text style={estilos.perfilTexto}>Id: {user.userId}</Text>        
            </View>
            <View>
              <TouchableOpacity onPress={handleEditar}>
                <Text
                  style={[estilos.botaoTextoCuidador, { marginBottom: 20 }]}>
                  Editar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={estilos.botaoExcluir}
            onPress={handleExluirConta}>
            <Text style={estilos.botaoTextoExcluir}>excluir</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={estilos.titulo}> Seus Pets</Text>
            <View style={estilos.linha}></View>
          </View>
          
          <View>

          <ScrollView alwaysBounceVertical>
            <View>
            {pets.map((pet) => (  
              <List.Item    
              key={pet.id}
              title={pet.nome}
              left={() => (
              <Image source={pet.imagem} style={estilos.imagemPetLista}/>
              )}
              right={(props) => (
                <View>
                <IconButton
                  {...props}
                  icon="delete"
                  color="orange"
                  onPress={() =>removerPet(pet.id)}
                />
                <IconButton
                  {...props}
                  icon="pencil"
                  color="orange"
                  onPress={() => navigation.navigate('PerfilEditarPet', {petId: pet.id})}
                />
                </View>
              )}
            />
            ))}
            </View>
            <View style={estilos.containerPerfil}>
            <Pressable onPress={handleCadastrarPet}>
              <View style={{ alignItems: 'center' }}>
                <Text style={estilos.botaoTextoCuidador}></Text>
                <Ionicons name="add-circle" size={50} color="orange"/>
              </View>
            </Pressable>
          </View>
          </ScrollView>
          
          </View>
          

        </View>
      </View>
    </LayoutBase>
  );
};

export default Perfil;

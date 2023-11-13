import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import ListaPets from '../components/ListaPets';
import { data } from '../components/ListaPets';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import { deleteUser } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { PetContext } from '../contexts/PetContext';

const Perfil = (children) => {
  const navigation = useNavigation();
  const {user, logout} = useContext(AuthContext);

  const handleEditar = () => {
    navigation.navigate('PerfilEditar');
  };
  const handleEditarPet = () => {
    navigation.navigate('PerfilEditarPet');
  };
  const handleExluirConta = () => {
    const user = auth.currentUser;

    deleteUser(user).then(() => {
      alert('Conta Excluída!');
      logout()
    }).catch((error) => {
      alert('Operação não finalizada!')
});
    
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
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={estilos.titulo}> Seus Pets</Text>
            <View style={estilos.linha}></View>
          </View>
          <View>
            <ListaPets/>
          </View>
          <View>
              
            </View>
          <View
            style={{
              marginTop: 50,
              justifyContent: 'space-around',
              alignItems: 'stretch',
              flexDirection: 'row'

            }}>
 
            <Pressable onPress={handleEditarPet}>
              <View style={{ alignItems: 'center', padding:5 }}>
                <Text style={estilos.botaoTextoCuidador}>Editar Pet</Text>
                <Ionicons name="pencil" size={20} color="orange" />
              </View>
            </Pressable>
            <Pressable onPress={handleCadastrarPet}>
              <View style={{ alignItems: 'center' }}>
                <Text style={estilos.botaoTextoCuidador}>Novo Pet</Text>
                <Ionicons name="add-outline" size={24} color="orange" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </LayoutBase>
  );
};

export default Perfil;

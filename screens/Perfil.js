import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import ListaPets from '../components/ListaPets';
import { data } from '../components/ListaPets';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';

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
    alert('Conta Excluída!');
    logout()
  };
  const handleCadastrarPet = () => {
    navigation.navigate('PerfilCadastrarPet')
  }

  return (
    <LayoutBase>
      <View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={estilos.titulo}> Seus Dados</Text>
            <View style={estilos.linha}></View>
          </View>
          <View
            style={{
              flex: 1,
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
                  editar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={estilos.botaoExcluir}
            onPress={handleExluirConta}>
            <Text style={estilos.botaoTextoExcluir}>excluir</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={estilos.titulo}> Seus Pets</Text>
            <View style={estilos.linha}></View>
          </View>
          <View style={estilos.containerInterno}>
            <ListaPets data={data} exibirNome={true} exibirFoto={true} />
            <TouchableOpacity onPress={handleEditarPet}>
                <Text
                  style={[estilos.botaoTextoCuidador, { marginBottom: 20 }]}>
                  editar
                </Text>
              </TouchableOpacity>
          </View>
          <View>
              
            </View>
          <View
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
            onPress={handleCadastrarPet}>
              <View style={{ alignItems: 'center' }}>
                <Text style={estilos.botaoTextoCuidador}>Novo Pet</Text>
                <Ionicons name="add-outline" size={24} color="orange" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LayoutBase>
  );
};

export default Perfil;

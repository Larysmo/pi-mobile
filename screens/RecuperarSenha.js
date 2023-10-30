import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import estilos from '../components/estilos';



const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  
  const handleRecuperarSenha = () => {
    if (email) {
      alert('Nova senha enviada para o email informado!');
      navigation.navigate('Login');
    } else {
      alert('Por favor, informe o e-mail cadastrado!');
    }
  };

  return (
   <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 10,
          }}>
          <Text>Recuperar Senha</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 0.9, backgroundColor: 'white' }}>
        <Text style={estilos.titulo}>E-mail cadastrado:</Text>
        <View style={estilos.containerInterno}>
        <TextInput
          style={estilos.input}
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={estilos.botao} onPress={handleRecuperarSenha}>
          <Text style={estilos.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecuperarSenha;
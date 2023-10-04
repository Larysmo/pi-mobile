import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import estilos from '../components/estilos';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handleRecuperarSenha = () => {
    if (email) {
      alert('Verifique seu e-mail!');
      navigation.navigate('Login');
    } else {
      alert('Por favor, informe o e-mail cadastrado!');
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.quadrado}>
        <Text stye={estilos.texto}>Informe o e-mail cadastrado:</Text>
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
    </View>
  );
};

export default RecuperarSenha;

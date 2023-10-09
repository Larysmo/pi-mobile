<<<<<<< HEAD
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const RecuperarSenha = () => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {

    console.log(`Recuperar senha para o email: ${email}`);
  }

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
        <Button style={estilos.botao} onPress={handleRecuperarSenha}>Enviar</Button> 
      </View>
      
    </View>
  )
}

export default RecuperarSenha;


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    height: '70%',
  },
  input: {
    width: 300,
    marginBottom: 10,
    borderRadius:10
  },
  botao: {
    backgroundColor: 'blue',
    width: 100,
  },
  texto: {
    fontSize: 14,
    marginBottom:10,
  }
})
=======
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
>>>>>>> ff94ad68f5ffe558da1554915f6c50e994a88349

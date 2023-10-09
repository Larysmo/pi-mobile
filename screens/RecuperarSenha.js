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
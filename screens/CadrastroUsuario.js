import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';




const CadastroUsuario = () => {

  return (
    <View style={estilos.container}>
      <View style={estilos.quadrado}>
        <Text style={estilos.titulo}>Bem-vindo(a):</Text>
            <TextInput
              style={estilos.input}
              label="Nome Completo"
            />
            <TextInput
              style={estilos.input}
              label="Telefone"
            />
            <TextInput
              style={estilos.input}
              label="E-mail"
            />
            <TextInput
              style={estilos.input}
              label="Senha"
              secureTextEntry={true}
            />
          <Button style={estilos.botao}>Entrar</Button> 
      </View>
    </View>
  )
}

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
  botao: {
    backgroundColor: 'blue',
    width: 100,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    width: 300,
    marginBottom: 10,
    borderRadius:10
  },
})

export default CadastroUsuario
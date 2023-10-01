import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logomarca from '../assets/Logo.png';
import { useNavigation } from '@react-navigation/native';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();


  const handleEntrar = () => {
    navigation.navigate('Home')
  }
  const handleLogin = () => {
    navigation.navigate('Login')
  }
  const handleCadastrarUsuario = () => {
    navigation.navigate('CadastroUsuario')
  }
  const handleRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha')
  }



  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={estilos.quadrado}>
        <Image source={Logomarca} />
        <Text style={estilos.titulo}>Tutor Pet</Text>

        <TextInput
          style={estilos.input}
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={estilos.input}
          label="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Button style={estilos.botao} onPress={handleEntrar}>Entrar</Button>
        <View style={estilos.botaofim}>
          <Button onPress={handleCadastrarUsuario}>Cadastrar Novo</Button>
          <Button onPress={handleRecuperarSenha}>Recuperar Senha</Button>
        </View>
      </View>
      
    </KeyboardAvoidingView>
  );
};

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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'blue',
    width: 150,
  },
  botaofim: {
    flexDirection: 'row',
    marginTop: 40,
  },
});

export default Login;
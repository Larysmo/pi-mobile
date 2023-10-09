<<<<<<< HEAD
import { Text, View, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import Logomarca from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useState} from 'react';
import estilos from '../components/estilos'


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();


  const handleEntrar = () => {
    navigation.navigate("Inicio")
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



export default Login;
=======
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logomarca from '../assets/Logo.png';
import { useNavigation } from '@react-navigation/native';
import estilos from '../components/estilos';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleEntrar = () => {
    if (email && senha) {;
      navigation.navigate('Home', {email});
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  const handleCadastrarUsuario = () => {
    navigation.navigate('CadastroUsuario');
  };
  const handleRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha');
  };

  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
        <TouchableOpacity
          style={estilos.botao}
          onPress={handleEntrar}>
          <Text style={estilos.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
        <View style={estilos.botaofim}>
          <Button onPress={handleCadastrarUsuario}>Cadastrar Novo</Button>
          <Button onPress={handleRecuperarSenha}>Recuperar Senha</Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
>>>>>>> ff94ad68f5ffe558da1554915f6c50e994a88349

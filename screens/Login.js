import { Text, ScrollView, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
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
    <ScrollView style={estilos.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <View style={estilos.quadrado}>
        <Image source={Logomarca} />
        <Text style={estilos.titulo}>Tutor Pet</Text>
        <TextInput
          style={estilos.inputLogin}
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={estilos.inputLogin}
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
  </ScrollView>
  );
};

export default Login;
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
    <View style={{flex:1, marginTop:20}}>
    <View style={{flex:0.1, backgroundColor:'orange' }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}

 >
      <View style={estilos.containerInterno}>
        <Image source={Logomarca} />
        <Text style={{textAlign:'center', fontSize:18}}>Tutor Pet</Text>
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
        <View style={estilos.botaoFim}>
        <View>
          <TouchableOpacity
            onPress={handleCadastrarUsuario}>
            <Text style={estilos.botaoTexto}>Cadastrar Novo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleRecuperarSenha}>
            <Text style={estilos.botaoTexto}>Recuperar Senha</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  </View>
  </View>
  );
};

export default Login;
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import Home from './Home'

const CadastroUsuario = () => {


const navigation = useNavigation();


const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");




  const handlecadastrar = () => {
    if (nome && telefone && email && senha) {
        navigation.navigate('Home');
    }else{
      alert("Por favor, preencha todos os campos!")
    }
}

  return (
    <View style={estilos.container}>
      <View style={estilos.quadrado}>
        <Text style={estilos.titulo}>Bem-vindo(a):</Text>
            <TextInput
              style={estilos.input}
              label="Nome Completo"
              value={nome}
              onChangeText={setNome}
              keyboardType="default"
              autoCapitalize="words"
            />
            <TextInput
              style={estilos.input}
              label="Tel. (XX) X XXXX-XXXX"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
              maxLength={11}
            />
            <TextInput
              style={estilos.input}
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={estilos.input}
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}

            />
          <Button style={estilos.botao} onPress={handlecadastrar} >Entrar</Button> 
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
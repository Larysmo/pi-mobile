import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import estilos from '../components/estilos'

const CadastroUsuario = () => {


const navigation = useNavigation();


const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

  const handlecadastrar = () => {
    if (nome && telefone && email && senha) {
        navigation.navigate('Inicio');
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
          <TouchableOpacity style={estilos.botao} onPress={handlecadastrar}>
          <Text style={estilos.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default CadastroUsuario
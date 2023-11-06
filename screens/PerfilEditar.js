import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';



const CadastroUsuario = () => {

const navigation = useNavigation();


const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

  const handleSalvar = () => {
    if (nome || telefone || email || senha) {
       alert("Dado(s) Atualizado(s)!")
    }
}
   return (
      <LayoutBase>
            <Text style={{textAlign:'center', fontSize:18, margin:10}}>Dados</Text>
            <View style={estilos.containerInterno}>
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
          <TouchableOpacity style={estilos.botao} onPress={handleSalvar}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
       </View>
    </LayoutBase>
  )
}

export default CadastroUsuario
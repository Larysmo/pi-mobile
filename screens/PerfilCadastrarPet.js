import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';



const CadastroUsuario = () => {

const navigation = useNavigation();


const [nome, setNome] = useState("");
const [raca, setRaca] = useState("");
const [idade, setIdade] = useState("");

  const handlecadastrar = () => {
    if (nome && raca && idade) {
        alert("Pet cadastrado!")
        navigation.navigate('Home');
    }else{
      alert("Por favor, preencha todos os campos!")
    }
}

  return (
      <LayoutBase>
            <Text style={estilos.titulo}>Novo Pet</Text>
            <View style={estilos.containerInterno}>
            <TextInput
              style={estilos.input}
              label="Nome"
              value={nome}
              onChangeText={setNome}
              keyboardType="default"
              autoCapitalize="words"
            />
      <TextInput
              style={estilos.input}
              label="Raca"
              value={raca}
              onChangeText={setRaca}
              keyboardType="default"
              autoCapitalize="words"
            />
      <TextInput
              style={estilos.input}
              label="Idade"
              value={idade}
              onChangeText={setIdade}
             keyboardType="phone-pad"
              maxLength={2}
            />
          <TouchableOpacity style={estilos.botao} onPress={handlecadastrar}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
       </View>
    </LayoutBase>
  )
}

export default CadastroUsuario
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
const PerfilEditarPet = () => {

    const navigation = useNavigation();


    const [nomePet, setNomePet] = useState("");
    const [saude, setSaude] = useState("");
    const [observacoes, setObservacoes] = useState("");

      const handleSalvar = () => {
        if (nomePet || saude || observacoes ) {
           alert("Dado(s) Atualizado(s)!")
           navigation.navigate('Home');
          }else{
            alert("Por favor, preencha todos os campos!")
          }
      }
  return (
<LayoutBase>
            <Text style={{textAlign:'center', fontSize:18, margin:10}}>Dados</Text>
            <View style={estilos.containerInterno}>
            <TextInput
              style={estilos.input}
              label="Nome Pet"
              value={nomePet}
              onChangeText={setNomePet}
              keyboardType="default"
              autoCapitalize="words"
            />
            <TextInput
              style={estilos.input}
              label="Como está a saude do seu pet?"
              value={saude}
              onChangeText={setSaude}
              keyboardType="default"
              autoCapitalize="words"
            />
            <TextInput
              style={estilos.input}
              label="Alguma Observação sobre seu bichinho?"
              value={observacoes}
              onChangeText={setObservacoes}
              keyboardType="default"
              autoCapitalize="words" 
            />

          <TouchableOpacity style={estilos.botao} onPress={handleSalvar}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
       </View>
    </LayoutBase>
  );
}

export default PerfilEditarPet
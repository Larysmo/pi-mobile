import { useContext, useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { PetContext } from '../contexts/PetContext';

const PerfilEditarPet = ({ route, navigation }) => {
  const { petId } = route.params;
  const { buscarPet, atualizarPet } = useContext(PetContext);
  
  const [nome, setNome] = useState();
  const [especie, setEspecie] = useState();
  const [raca, setRaca] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [castrado, setCastrado] = useState();

 
  // traz os dados salvos no input de edição
  useEffect(() => {
    buscarPet(petId).then((pet) => {
      setNome(pet.nome);
      setTelefone(pet.especie);
      setRaca(pet.raca);
      setIdade(pet.Idade);
      setSexo(pet.sexo);
      setCastrado(pet.castrado);
    });
  }, []);
  

  return (
<LayoutBase>
  <Text style={{textAlign:'center', fontSize:18, margin:10}}>Dados</Text>
    <View style={estilos.containerInterno}>
          <TextInput 
            style={estilos.input}
            label="Nome" 
            value={nome} 
            onChangeText={(text) => setNome(text)}
            />


            <TextInput 
              style={estilos.input}
              label="Espécie"
              value={especie}
              onChangeText={(text) => setEspecie(text)}
        />

            <TextInput
              style={estilos.input}
              label="Raça"
              value={raca}
              onChangeText={(text) => setRaca(text)}
        />

            <TextInput
              style={estilos.input}
              label="Idade"
              value={idade}
              onChangeText={(text) => setIdade(text)}
            />

            <TextInput
              style={estilos.input}
              label="Sexp"
              value={sexo}
              onChangeText={(text) => setSexo(text)}
            />

            <TextInput 
              style={estilos.input}
              label="Castrado?"
              value={value}
              onChangeText={(text) => setCastrado(text)}
            />



        <Button style={estilos.botao} mode="contained" onPress={() => {
            atualizarPet(PetId, nome, especie, raca, castrado, idade, sexo);
            navigation.navigate('Perfil');
          }}>
        <Text style={estilos.botaoTexto}>Salvar</Text>
        </Button>

       </View>
    </LayoutBase>
  );
}

export default PerfilEditarPet
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { TextInput, HelperText, Button } from 'react-native-paper';
import { useContext, useState } from 'react';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { useForm, Controller } from 'react-hook-form';
import { PetContext } from '../contexts/PetContext';

const PerfilCadastrarPet = ({ navigation}) => {

  const [nome, setNome] = useState();
  const [especie, setEspecie] = useState();
  const [raca, setRaca] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [castrado, setCastrado] = useState();

  const { adicionarPet } = useContext(PetContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <LayoutBase>
      <Text style={estilos.titulo}>Novo Pet</Text>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          keyboardType="default"
          autoCapitalize="words"
          />

        <TextInput
          label="Especie"
          value={especie}
          onChangeText={(text) => setEspecie(text)}
          keyboardType="default"
          autoCapitalize="words"
          />

        <TextInput
          label="Raça"
          value={raca}
          onChangeText={(text) => setRaca(text)}
          keyboardType="default"
          autoCapitalize="words"
          />

        <TextInput
          label="Idade"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="default"
          autoCapitalize="words"
          />
  
        <TextInput
          label="Sexo"
          value={sexo}
          onChangeText={(text) => setSexo(text)}
          keyboardType="default"
          autoCapitalize="words"
          />

        <TextInput
          label="Castrado?"
          value={castrado}
          onChangeText={(text) => setCastrado(text)}
          keyboardType="default"
          autoCapitalize="words"
          />

        <Pressable style={estilos.botao} 
           onPress={() => {
            adicionarPet(nome, especie, raca, idade, sexo, castrado);
            navigation.navigate('Perfil');
            alert('Pet Cadastrado')
          }}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </Pressable>
      </ScrollView>
    
    </LayoutBase>
  );
};

export default PerfilCadastrarPet;

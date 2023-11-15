import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { PetContext } from '../contexts/PetContext';

const PerfilEditarPet = ({ route, navigation }) => {
  const { petId } = route.params;
    const { buscarPet, atualizarPet } = useContext(PetContext);
  const pet = buscarPet(petId);  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: pet.nome,
      raca: pet.raca,
      especie: pet.especie,
      idade: pet.idade,
      sexo: pet.sexo,
      castrado: pet.castrado
    },
  });
  
  const onSubmit = (data) => {
    atualizarPet(petId, data);
    navigation.pop();
  };
  
  const rulesNome = {
    required: { value: true, message: 'Nome é obrigatorio' },
  };

  const rulesRaca = {
    required: { value: true, message: 'Favor informar a raça' },
  };

  const rulesEspecie = {
    required: { value: true, message: 'Favor informar a especie' },
  };

  const rulesCastrado = {
    required: { value: true, message: 'Seu Bichinho é castrado?' },
  };
  
  const rulesIdade = {
    required: { value: true, message: 'Idade' },
  };

  const rulesSexo = {
    required: { value: true, message: 'Sexo' },
  };

  return (
<LayoutBase>
  <Text style={{textAlign:'center', fontSize:18, margin:10}}>Dados</Text>
    <View style={estilos.containerInterno}>
      <Controller
          name="nome"
          control={control}
          rules={rulesNome}
          render={({ field: { value, onChange } }) => (
          <TextInput 
            style={estilos.input}
            label="Nome" 
            value={value} 
            onChangeText={onChange} />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.nome && errors.nome.message}
        </HelperText>
        
        <Controller
          name="raca"
          control={control}
          rules={rulesRaca}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={estilos.input}
              label="Raça"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.raca && errors.raca.message}
        </HelperText>
        
        <Controller
          name="especie"
          control={control}
          rules={rulesEspecie}
          render={({ field: { value, onChange } }) => (
            <TextInput 
              style={estilos.input}
              label="Espécie"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.especie && errors.especie.message}
        </HelperText>
        
        <Controller
          name="castrado"
          control={control}
          rules={rulesCastrado}
          render={({ field: { value, onChange } }) => (
            <TextInput 
              style={estilos.input}
              label="Castrado?"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.castrado && errors.castrado.message}
        </HelperText>

        <Controller
          name="idade"
          control={control}
          rules={rulesIdade}
          render={({ field: { value, onChange } }) => (
            <TextInput 
              style={estilos.input}
              label="Idade"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.idade && errors.idade.message}
        </HelperText>

        <Controller
          name="Sexo"
          control={control}
          rules={rulesSexo}
          render={({ field: { value, onChange } }) => (
            <TextInput 
              style={estilos.input}
              label="Sexo"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.sexo && errors.sexo.message}
        </HelperText>

        <Button style={estilos.botao} mode="contained" onPress={handleSubmit(onSubmit)}>
        <Text style={estilos.botaoTexto}>Salvar</Text>
        </Button>

       </View>
    </LayoutBase>
  );
}

export default PerfilEditarPet
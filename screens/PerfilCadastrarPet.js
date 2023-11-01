import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useState } from 'react';
import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { useForm, Controller } from 'react-hook-form';

const CadastroUsuario = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const onSubmit = (data) => {
      alert('Pet cadastrado!');
      navigation.navigate('Home');
  }
  
  return (
    <LayoutBase>
      <Text style={estilos.titulo}>Novo Pet</Text>
      <View style={estilos.containerInterno}>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Nome obrigatorio!' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={estilos.input}
              label="Nome"
              value={value}
              onChangeText={onChange}
              keyboardType="default"
              autoCapitalize="words"
            />
          )}
          name="nome"
        />
        <HelperText type="error" visible="true">
          {errors.nome && errors.nome.message}
        </HelperText>

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Raça obrigatoria!' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={estilos.input}
              label="Raca"
              value={value}
              onChangeText={onChange}
              keyboardType="default"
              autoCapitalize="words"
            />
          )}
          name="raca"
        />
        <HelperText type="error" visible="true">
          {errors.raca && errors.raca.message}
        </HelperText>

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Idade obrigatoria!' },
}}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={estilos.input}
              label="Idade"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              maxLength={2}
            />
          )}
          name="idade"
        />
        <HelperText type="error" visible="true">
          {errors.idade && errors.idade.message}
        </HelperText>

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Peso obrigatoria!' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={estilos.input}
              label="Peso"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              maxLength={2}
            />
          )}
          name="peso"
        />
        <HelperText type="error" visible="true">
          {errors.peso && errors.peso.message}
        </HelperText>
        <TouchableOpacity style={estilos.botao} onPress={handleSubmit(onSubmit)}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </LayoutBase>
  );
};

export default CadastroUsuario;

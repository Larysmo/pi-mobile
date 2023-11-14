import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useState, useContext } from 'react';
import { useForm, Controller} from 'react-hook-form';

import LayoutBase from '../components/layoutBase';
import estilos from '../components/estilos';
import { AuthContext } from '../contexts/Auth';


const PerfilEditar = ({route, navigation}) => {

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();



const handleSalvar = () => {
    if (nome || telefone || email || senha) {
       alert("Dado(s) Atualizado(s)!")
    }
}
   return (
      <LayoutBase>
            <Text style={{textAlign:'center', fontSize:18, margin:10}}>Editar Dados</Text>
            <View style={estilos.containerInterno}>
            <Controller
              control={control}
              rules={{ value:true, message: "Nome Obrogatório!"}}
              render={({field: {value, onChange} }) => (
                <TextInput
                  style={estilos.input}
                  label="Nome Completo"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                  autoCapitalize="words"
                />
              )}
              name="nome"
            />
            <HelperText type="error" visible={true}>
              {errors.nome && errors.nome.message}
            </HelperText>


          <Controller
            control={control}
            rules={{ value: true, message:"Telefone obrigatório!"}}
            render={( {field: {value, onChange} }) => (
              <TextInput
                style={estilos.input}
                label="Tel. (XX) X XXXX-XXXX"
                value={value}
                onChangeText={onChange}
                keyboardType="phone-pad"
                maxLength={11}
              />
            )}
            name="telefone"
          />
            <HelperText type="error" visible={true}>
              {errors.telefone && errors.telefone.message}
            </HelperText>

          <Controller
            control={control}
            rules={{ value: true, message:"Email obrigatório!"}} 
            render={( {field: {value, onChange} }) => (  
              <TextInput
                style={estilos.input}
                label="E-mail"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
            <HelperText type="error" visible={true}>
              {errors.email && errors.email.message}
            </HelperText>

        <Controller
          control={control}
          rules={{}}
          render={( {field: {value, onChange}} ) => (
            <TextInput
              style={estilos.input}
              label="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
          name="senha"
        />
          <HelperText type="error" visible={true}>
            {errors.senha && errors.senha.message}
          </HelperText>
          <TouchableOpacity style={estilos.botao} onPress={handleSalvar}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
       </View>
    </LayoutBase>
  )
}

export default PerfilEditar
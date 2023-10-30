import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import estilos from '../components/estilos';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

const CadastroUsuario = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, login, logout, register  } = useContext(AuthContext);
  
  const onSubmit = (data) => {
    register(data.email, data.senha, data.nome, data.telefone)
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 10,
          }}>
          <Text>Novo Cadastro</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 0.9, backgroundColor: 'white' }}>
        <Text style={estilos.titulo}>Bem-vindo(a):</Text>
        <View style={estilos.containerInterno}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Nome obrigatorio' },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={estilos.input}
                label="Nome Completo"
                value={value}
                onChangeText={onChange}
                keyboardType="default"
                vaness
                autoCapitalize="words"
              />
            )}
            name="nome"
          />
          {errors.nome && (
            <HelperText type="error" visible={true}>
              {errors.nome.message}
            </HelperText>
          )}
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Telefone obrigatorio' },
            }}
            render={({ field: { value, onChange } }) => (
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
          {errors.telefone && (
            <HelperText type="error" visible={true}>
              {errors.telefone.message}
            </HelperText>
          )}
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Email obrigatorio' },
               pattern: {value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, message:'Email com formato inválido!'},
            }}
            render={({ field: { value, onChange } }) => (
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
          {errors.email && (
            <HelperText type="error" visible={true}>
              {errors.email.message}
            </HelperText>
          )}
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Senha obrigatoria' },
            }}
            render={({ field: { value, onChange } }) => (
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
          {errors.senha && (
            <HelperText type="error" visible={true}>
              {errors.senha.message}
            </HelperText>
          )}
          <TouchableOpacity
            style={estilos.botao}
            onPress={handleSubmit(onSubmit)}>
            <Text style={estilos.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroUsuario;

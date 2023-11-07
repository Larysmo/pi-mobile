import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import estilos from '../components/estilos';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";


const CadastroUsuario = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, login } = useContext(AuthContext);
  const [exibeSenha, setExibeSenha] = useState(false);

  
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.senha)
  .then((userCredential) => {
    const user = userCredential.user;
    login(user.email, data.senha)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Usuário já cadastrado!');
  });
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
            <HelperText type="error" visible={true}>
              {errors.nome && errors.nome.message}
            </HelperText>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Telefone obrigatorio' },
              minLength: { value: 11, message: 'Telefone incompleto'}
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
            <HelperText type="error" visible={true}>
              {errors.telefone && errors.telefone.message}
            </HelperText>
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
                autoCapitalize="none"
              />
            )}
            name="email"
          />
            <HelperText type="error" visible={true}>
              {errors.email && errors.email.message}
            </HelperText>
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
                secureTextEntry={!exibeSenha}
                right={<TextInput.Icon icon="eye" color="#6b6b6b" onPress={() => setExibeSenha(!exibeSenha)}/>}

              />
            )}
            name="senha"
          />
            <HelperText type="error" visible={true}>
                {errors.senha && errors.senha.message}
            </HelperText>
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

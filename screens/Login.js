import { useForm, Controller } from 'react-hook-form';
import { Text, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { TextInput, HelperText, Colors } from 'react-native-paper';
import Logomarca from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';
import estilos from '../components/estilos';
import { AuthContext } from '../contexts/AuthContext';


const Login = () => {
  const navigation = useNavigation()
  const [exibeSenha, setExibeSenha] = useState(false);
  const {login} = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.senha)
  } 

  const handleCadastrarUsuario = () => {
    navigation.navigate('CadastroUsuario');
  };
  const handleRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha');
  };

  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <View style={{ flex: 0.1, backgroundColor: 'orange' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={estilos.containerInterno}>
            <Image source={Logomarca} />
            <Text style={{ textAlign: 'center', fontSize: 18, marginBottom:15 }}>Tutor Pet</Text>
            <Controller
              control={control}
              rules={{
                required: { value: true, message: 'E-mail obrigatório!' },
                pattern: {value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, message:'Email com formato inválido!'},
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={estilos.input}
                  label="E-mail"
                  keyboardType="email-address"
                  value={value}
                  onChangeText={onChange}
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
                  required: { value: true, message: 'Senha obrigatória!' },
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    style={estilos.input}
                    label="Senha"
                    secureTextEntry={!exibeSenha}
                    value={value}
                    right={<TextInput.Icon icon="eye" color="#6b6b6b" onPress={() => setExibeSenha(!exibeSenha) }/>}
                    onChangeText={onChange}
                  />
                )}
                name="senha"
              />
              <HelperText type="error" visible={true}>
                {errors.senha && errors.senha.message}
              </HelperText>
            <TouchableOpacity style={estilos.botao} onPress={handleSubmit(onSubmit)}>
              <Text style={estilos.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
            <View style={estilos.botaoFim}>
              <View>
                <TouchableOpacity onPress={handleCadastrarUsuario}>
                  <Text style={estilos.botaoTexto}>Cadastrar Novo</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleRecuperarSenha}>
                  <Text style={estilos.botaoTexto}>Recuperar Senha</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;
import { useForm, Controller } from 'react-hook-form';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import estilos from '../components/estilos';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const RecuperarSenha = () => {
   const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const navigation = useNavigation();
  
  const onSubmit = (data) => {
    sendPasswordResetEmail(auth, data.email)
    .then(() => {
      alert('Nova senha enviada para o email informado!');
      navigation.navigate('Login');
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  }) 
  };

  return (
   <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 10,
          }}>
          <Text>Recuperar Senha</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 0.9, backgroundColor: 'white' }}>
        <Text style={estilos.titulo}>E-mail cadastrado:</Text>
        <View style={estilos.containerInterno}>
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
        <TouchableOpacity style={estilos.botao} onPress={handleSubmit(onSubmit)}>
          <Text style={estilos.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecuperarSenha;
import { useForm, Controller } from 'react-hook-form';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import estilos from '../components/estilos';
import { useContext, useState, useEffect,  } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/Auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';



const CadastroUsuario = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, register} = useContext(AuthContext);
  const [exibeSenha, setExibeSenha] = useState(false);
  const navigation = useNavigation()

  
  const onSubmit = async (data) => {
    try {
      // Firebase Autenticacao
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.senha);
      
      const user = userCredential.user;
      const userId = user.uid;
   
      // Firestore
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      await setDoc(userDocRef, {
        name: data.nome,
        telefone: data.telefone,
        email: user.email
      });
  
    
      register(userId, user.email, data.senha, data.nome, data.telefone);
      navigation.pop()
      } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Erro ao cadastrar usuário: ' + errorMessage);
    }
  };
  useEffect(() => {
    async function criarCadastro() {
    if (user) {
      const userId = user.uid;
      register(userId, user.email, null, null, null);
    }
  }
    criarCadastro();
  }, []);

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
}

export default CadastroUsuario;

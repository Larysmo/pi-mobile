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

  const onSubmit = (data) => {
    adicionarPet(nome, especie),
    alert('Pet Cadastrado'),
    navigation.navigate("Perfil")
}

  return (
    <LayoutBase>
      <Text style={estilos.titulo}>Novo Pet</Text>
      <ScrollView style={{ flex: 1, padding: 16 }}>
      <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Nome obrigatorio!' },
          }}
          render={({ field: { value, onChange } }) => (
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
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
            required: { value: true, message: 'Especie obrigatoria!' },
          }}
          render={({ field: { value, onChange } }) => (
        <TextInput
          label="Especie"
          value={especie}
          onChangeText={(text) => setEspecie(text)}
          keyboardType="default"
          autoCapitalize="words"
          />
          )}
          name="especie"
        />
        <HelperText type="error" visible="true">
          {errors.especie && errors.especie.message}
        </HelperText>

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Raça obrigatoria!' },
          }}
          render={({ field: { value, onChange } }) => (
        <TextInput
          label="Raça"
          value={raca}
          onChangeText={(text) => setRaca(text)}
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
          label="Idade"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="default"
          autoCapitalize="words"
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
            required: { value: true, message: 'Favor informar o sexo!' },
          }}
          render={({ field: { value, onChange } }) => (     
        <TextInput
          label="Sexo"
          value={sexo}
          onChangeText={(text) => setSexo(text)}
          keyboardType="default"
          autoCapitalize="words"
          />
          )}
          name="sexo"
        />
        <HelperText type="error" visible="true">
          {errors.sexo && errors.sexo.message}
        </HelperText>

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Favor informar se o pet é castrado!' },
          }}
          render={({ field: { value, onChange } }) => (   
        <TextInput
          label="Castrado?"
          value={castrado}
          onChangeText={(text) => setCastrado(text)}
          keyboardType="default"
          autoCapitalize="words"
          />
          )}
          name="castrado"
        />
        <HelperText type="error" visible="true">
          {errors.castrado && errors.castrado.message}
        </HelperText>

        <Pressable style={estilos.botao} 
           onPress={handleSubmit(onSubmit)}>
          <Text style={estilos.botaoTexto}>Salvar</Text>
        </Pressable>
      </ScrollView>
      



    </LayoutBase>
  );
};

export default PerfilCadastrarPet;

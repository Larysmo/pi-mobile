
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
                required: { value: true, message: 'E-mail obrigatÃ³rio!' },
                pattern: {value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, message:'Email com formato invÃ¡lido!'},
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
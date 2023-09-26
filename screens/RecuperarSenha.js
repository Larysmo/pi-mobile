import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {

    console.log(`Recuperar senha para o email: ${email}`);
  }

  return (
    <>
      <TextInput 
        label="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button onPress={handleRecuperarSenha}>Recuperar Senha</Button> 
    </>
  )
}

export default RecuperarSenha;

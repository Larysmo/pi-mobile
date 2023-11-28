import axios from 'axios';

const API_KEY = "AIzaSyBB7bdl_mv15Tc4tU4CwGDLuHHeRYnGZyU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS') {
      throw Error('Usuario/Senha invalidos!');
    }
  }
};

const signUp = async (displayName, email, password, telefone) => {
  try {
    const response = await axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });

    const userId = response.data.localId;

    await axios.post(`https://meupet-feliz-default-rtdb.firebaseio.com/users/${userId}/dados.json`, {
      userId,
      displayName,
      email,
      telefone,
    });

    console.log('Usuário cadastrado com sucesso!');  // substituir por alert
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error.message === 'EMAIL_EXISTS') {
      throw Error('Usuario já cadastrado!');
    } else {
      console.log('Erro ao cadastrar usuario!');  // substituir por alert
    }
  }
};

export { signIn, signUp };
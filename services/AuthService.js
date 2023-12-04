import axios from 'axios';

const API_KEY = "AIzaSyBB7bdl_mv15Tc4tU4CwGDLuHHeRYnGZyU";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const DATABASE_URL = "https://meupet-feliz-default-rtdb.firebaseio.com/users";

let UserId; // usuário autenticado

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });

    UserId = response.data.localId;
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

    UserId = response.data.localId;

    await axios.post(`${DATABASE_URL}/${UserId}/dados.json`, {
      userId: UserId,
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

const getUser = async () => {
  try {
    const response = await axios.get(`${DATABASE_URL}/users/${UserId}.json`);
    for (const key in response.data) {
      user.push({ id: key, ...response.data[key] });
    }

    const userData = { id: UserId };
    console.log('dados AuthService:', userData);
    return userData;
  } catch (error) {
    console.error('Erro ao obter dados do usuário:', error);
    throw error;
  }
}

export { signIn, signUp, getUser };
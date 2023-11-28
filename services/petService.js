import axios from 'axios'
import {users} from '../contexts/Auth'

const BASE_URL = "https://meupet-feliz-default-rtdb.firebaseio.com/" // url do projeto nos dados da seção RealTime database do Firebase

// GET: listar todos os pets
const listarTodosPets = async () => {
  try{
    const pets = [];
    const response = await axios.get(`${BASE_URL}/pets/data.json`) // pets.json = pasta que vai ser utilizada no db para armazenar os dados inserirdos
    console.log(response.data)
    for (key in response.data) {
      pets.push({id: key, ...response.data[key]})
    }
    return(pets)
  }catch(error){
    console.log(error)
  }
}

// GET?idPet: listar um único pet
const listarPetPeloId = async (id) => {
  try{
    const response = await axios.get(`${BASE_URL}/pets/data/${id}.json`)
    return {id, ...response.data}
  }catch(error){
    console.log(error)
  }
}

// POST: incluir pet
const incluirPet = async (nome, especie, raca, castrado, idade, sexo ) => {
  try{
    const response = await axios.post(`${BASE_URL}/pets/data.json`, {
    nome, especie, raca, castrado, idade, sexo
    });
    return {id: response.data.name, nome, especie, raca, castrado, idade, sexo }
  }catch(error) {
    console.log(error)
  }
}
// PUT: alterar um pet
const alterarPet = async (id, nome, especie, raca, castrado, idade, sexo) => {
  try{
    const response = await axios.put(`${BASE_URL}/pets/data/${id}.json`, {
    nome, especie, raca, castrado, idade, sexo
    });
    return {id,...response.data}
  }catch(error) {
    console.log(error)
  }
}

//DELETE excluir um pet
const excluirPet = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/pets/data/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};


export { listarTodosPets, incluirPet, alterarPet, listarPetPeloId, excluirPet }
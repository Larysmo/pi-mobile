import { createContext, useState } from 'react';
import {listarTodosPets, incluirPet, alterarPet, listarPetPeloId, excluirPet} from '../services/petService'

const PetContext = createContext();

const PetProvider = ({ children }) => { 
  const [pets, setPets] = useState([]);

  const adicionarPet = async  (nome, especie, raca, castrado, idade, sexo) => {
    try{
      const novoPet = await incluirPet (nome, especie, raca, castrado, idade, sexo);
      setPets([...pets, novoPet])
      alert('Pet cadastrado!');
      navigation.navigate('Perfil');s
    }catch(error){
      console.log(error)
    }
  };

  const listarPet = async () => {
    try {
      const listaPetAtualizada = await listarTodosPets();
      setPets(listaPetAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };


  const buscarPet = async (id) => {
    try {
      return await listarPetPeloId(id);
    } catch (error) {
      console.log;
    }
  };


  const atualizarPet = async (id, nome, especie, raca, castrado, idade, sexo) => {
    try{
      const petAtualizado = await alterarPet(id, nome, especie, raca, castrado, idade, sexo);
      const listaPetAtualizada = pets.map((pet) => 
        contato.id === id ? petAtualizado : pet);
        setPets(listaPetAtualizada)
    }catch(error){
      console.log(error)
    };
  };

  const removerPet = async (id) => {
    try {
      await excluir(id);
      const index = pets.findIndex((pet) => pet.id === id);
      pets.splice(index, 1);
      setPets([...pets]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const findPet = (id) => {
    return pets.find((pet) => pet.id === id);
  };


  return (
    <PetContext.Provider value={{ pets, findPet, atualizarPet, buscarPet, adicionarPet, listarPet, removerPet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
export { PetContext };
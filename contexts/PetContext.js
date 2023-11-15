import { createContext, useState } from 'react';

const PetContext = createContext();

const PetProvider = ({ children }) => { 
    const [pets, setPets] = useState([
    {
        id: 1,
        nome: 'Blackout',
        especie: 'felina',
        raca: 'SRD',
        sexo: 'Fêmea',
        idade: '9 anos',
        castrado: 'Sim',
        imagem: require('../assets/gatopreto.png'),
    },
    {
        id: 2,
        nome: 'Caramelo',
        especie: 'canina',
        raca: 'SRD',
        sexo: 'Macho',
        idade: '6 anos',
        castrado: 'Nao',
        imagem: require('../assets/caramelo.jpg'),
    },
    {
        id: 3,
        nome: 'Lôro',
        especie: 'ave',
        raca: 'SRD',
        sexo: 'Macho',
        idade: '5 anos',
        castrado: 'Nao',
        imagem: require('../assets/loro.jpg'),
    },
  ]);

  const buscarPet = (id) => {
    return pets.find((pet) => pet.id === id);
  };

  const atualizarPet = (id, { nome, especie, raca, idade, imagem }) => {
    const atualizaPet = {id, nome, especie, raca, idade, imagem };
    const listaPetAtualizada = pets.map((pet) =>
      pet.id === id ? atualizaPet : pet
    );
    setContatos(listaPetAtualizada);
  };

  const findPet = (id) => {
    return pets.find((pet) => pet.id === id);
  };

  return (
    <PetContext.Provider value={{ pets, findPet, atualizarPet, buscarPet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
export { PetContext };
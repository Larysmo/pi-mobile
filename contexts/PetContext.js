import { createContext, useState } from 'react';

const PetContext = createContext();

const PetProvider = ({ children }) => { 
    const [pets, setPets] = useState([
    {
        id: 1,
        nome: 'Blackout',
        espécie: 'felina',
        raça: 'SRD',
        sexo: 'Fêmea',
        idade: '9 anos',
        imagem: require('../assets/gatopreto.png'),
    },
    {
        id: 2,
        nome: 'Caramelo',
        espécie: 'canina',
        raça: 'SRD',
        sexo: 'Macho',
        idade: '6 anos',
        imagem: require('../assets/caramelo.jpg'),
    },
    {
        id: 3,
        nome: 'Lôro',
        espécie: 'ave',
        raça: 'SRD',
        sexo: 'Macho',
        idade: '5 anos',
        imagem: require('../assets/loro.jpg'),
    },
  ]);

  const findPet = (id) => {
    return pets.find((pet) => pet.id === id);
  };

  return (
    <PetContext.Provider value={{ pets, findPet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
export { PetContext };
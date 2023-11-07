import { createContext } from 'react';

const PetContext = createContext();

const PetProvider = ({ children }) => {
  const pet = [
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
  ];

  const findPet = (id) => {
    return pet.find((pet) => pet.id === id);
  };

  return (
    <PetContext.Provider value={{ pet, findPet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
export { PetContext };
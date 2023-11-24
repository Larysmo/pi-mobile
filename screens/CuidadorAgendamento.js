import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../components/layoutBase';

import estilos from '../components/estilos';
import Calendario from '../components/Calendario';
import ListaPets from '../components/ListaPets';
import { data } from '../components/ListaPets';
import { PetContext } from '../contexts/PetContext';

const CuidadorAgendamento = (props) => {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState(null);

  const {pets, listarPetPeloId} = useContext(PetContext); //traz apenas produtos

  const handleSair = () => {
    navigation.navigate('Login');
  };

  const selectPet = (pet) => {
    setSelectedPet(pet);
  };

  const handleAgendar = () => {
    if (selectedPet) {
      alert(`Agendamento realizado para ${selectedPet.nome}!`);
    } else {
      alert('Selecione um animal de estimação antes de agendar.');
    }
  };

  const petsData = pets; // Assuming data is an array of pets



  return (
    <LayoutBase>
      <ScrollView>
        <View>
          <Calendario />
        </View>
        <View style={estilos.containerInterno}>
          <View style={{ marginTop: 5 }}>
            <Text style={{ marginBottom: 0 }}>
              Clique no Pet para selecionar{' '}
            </Text>
            
            <Pressable>
            <View >
              <ListaPets />
            </View>
            </Pressable>

          </View>
        </View>
      </ScrollView>
      
      <View style={{alignItems:'center'}}>
        <Pressable
          style={estilos.botaoCuidador}
          onPress={handleAgendar}>
          <Text style={estilos.botaoTextoCuidador}>Agendar</Text>
        </Pressable>
      </View>
    </LayoutBase>
  );
};

export default CuidadorAgendamento;

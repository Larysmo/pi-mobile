import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ListaAgenda = () => {

const handleExcluir = () => {
    alert('Agendamento excluido!');
  };



  const data = [
    { id: '1',
      nome: 'Caramelo',
      data: '15-10-2023 a 20-10-2023'
    },
    { id: '2',
      nome: 'Blackout',
      data: '25-11-2023 a 30-11-2023' },
    
  ];

  return (
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.listaCuidadores}>
            <View style={{flex:1, marginRight:3}}>
            <Text>{item.nome}</Text>
            <Text>{item.data}</Text>
            </View>
            <TouchableOpacity
              style={estilos.botaoCuidador}
              onPress={handleExcluir}>
              <Text style={estilos.botaoTextoCuidador}>excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ListaAgenda;


const estilos =  StyleSheet.create({
  listaCuidadores:{
    margin:10,
    padding:10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:10
  },
  botaoCuidador:{
    backgroundColor:"black",
    width:70,
    height:30,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoTextoCuidador:{
    fontWeight:"bold",
    fontSize: 14,
    color: "orange"
  },
})
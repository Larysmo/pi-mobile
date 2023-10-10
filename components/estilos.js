import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    height: '70%',
  },
  input: {
    width: 300,
    marginBottom: 10,
    borderRadius:10
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'blue',
    width: 150,
  },
  botaofim: {
    flexDirection: 'row',
    marginTop: 40,
  },
});

export default estilos
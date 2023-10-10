import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8
  },
  quadrado: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inputLogin: {
    width: 180,
    marginBottom: 10,
    borderRadius:10,
  },
  input: {
    width: "80%",
    height:50,
    marginBottom: 10,
    borderRadius:10,
  },
  busca: {
    flex: 0,
    width: 280,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  titulo: {
    fontSize: 18,
    alignSelf: 'left',
    marginBottom: 5,
  },
   botao:{
    backgroundColor:"black",
    width:80,
    height:40,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoTexto:{
    fontWeight:"bold",
    fontSize: 18,
    color: "orange"
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
  botaofim: {
    flexDirection: 'row',
    marginTop: 35,
    fontSize: 10
  },
  texto: {
    fontSize: 14,
    marginBottom:10,
  },
  homeBusca:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
   inputHome:{
    width: 280,
    height: 40,
    borderRadius: 15,
  },
  homeBotao:{
    width: 40,
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  petLista:{
    flex:2
  },
  tituloHome: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
  },
  pet:{
    border:1,
    padding:5
  },
  lista:{
    marginTop: 10,
    flex: 1,
  },
  containerPetHome:{
    flex: 3,
    flexDirection: 'row',    
    width: '100%',
  },
  containerBuscatHome:{
    flex: 1,
    flexDirection: 'column',    
    marginBottom: 10,
    justifyContent: 'center',
  },
  agendaConfirmada:{
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  listaCuidadores:{
    margin:10,
    padding:10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:10
  },
   menuBotoes: {
   flexDirection: "row",
   justifyContent: 'space-around',
   backgroundColor: "blue",
   margin: 10,
   borderRadius: 10
  },
   agenda: {
   flexDirection: "row",
   justifyContent: 'space-around',
   backgroundColor: "blue",
   margin: 10,
   borderRadius: 10
  },
  textHome:{
    fontSize: 15,
    color: "white"
  },
  containerAgendaHome:{
    flex: 3,
    flexDirection: 'column',    
    marginBottom: 10,
    
    width: '100%'
  }

});

export default estilos
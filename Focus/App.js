import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { styled } from 'styled-components';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' style = {styles.loading}/>

      <Image
      style = {styles.img} 
      source = {require('./src/images/Tela_carregamento/original_sem_fundo.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
    backgroundColor: '#FFF',
    borderRadius: 150
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    color:"#000",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10
  },
  loading: {
    marginBottom: 10,
  }



//   /* Circulo_roxo 1 */

// position: absolute;
// width: 192px;
// height: 198px;

// background: #D8630E;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);



  
});

const Subtitle = styled.text``

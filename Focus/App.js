import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { styled } from 'styled-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style = {styles.txt}>Desenvolvendo...</Text>
      <Subtitle>Testando!!</Subtitle>
      <ActivityIndicator size='large' style = {styles.loading}/>
      <Image
      style = {styles.img} 
      source = {require('./src/assets/logoFocusWord.jpeg')} />
      <Text style = {styles.txt}>Volte mais tarde!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCA001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
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

});

const Subtitle = styled.text``


// Comentario por murilo Barros :)

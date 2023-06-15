import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style = {styles.txt}>Shape em desenvolvimento!!!!</Text>
      <Image
      style = {styles.img} 
      source = {require('./assets/a.png')} />
      <Text style = {styles.txt}>Volte mais tarde!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ead65',
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
    fontSize: 35
  }
});

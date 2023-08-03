import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' style = {styles.loading}/>

      <Image
      style = {styles.logo} 
      source = {require('./src/images/Tela_carregamento/logoLoading.png')} />
      <StatusBar style="auto" />

      <Image
      style = {styles.logoAuth}
      source = {require('./src/images/Tela_carregamento/logoAuth.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF862E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 150
  },
  logoAuth: {
    width: 90,
    height: 45,
    bottom: 10,
    position: 'absolute'
  }

  
});


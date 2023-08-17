import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import LoadingScreen from './src/screens/Loading/index.js';
import PauseScreen from './src/screens/Pause/index.js';
import RewardScreen from './src/screens/Reward/index.js';
import WordScreen from './src/screens/WordSearch/index.js';

export default function App(){
  return (
    <WordScreen/>

<<<<<<< HEAD
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
    backgroundColor: '#FF862E',
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
=======
  )
}
>>>>>>> 02d9fa1e1c71b4ab6a78bab3d54ed5ad1a2cb49a

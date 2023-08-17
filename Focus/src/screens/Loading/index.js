import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import styles from './style';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>

<Image
      style = {styles.logo} 
      source = {require('../../images/Tela_carregamento/logoLoading.png')} />
      
    <Image
    style = {styles.circle}
    source={require('../../images/Tela_carregamento/circleLoading.png')}/>

      <Image
      style = {styles.logoAuth}
      source = {require('../../images/Tela_carregamento/logoAuth.png')}
      />

    </View>
  );
}
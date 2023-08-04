import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import { Easing, Keyframe, RotateInDownLeft } from 'react-native-reanimated';
import { keyframes, styled } from 'styled-components';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>

<Image
      style = {styles.logo} 
      source = {require('../images/Tela_carregamento/logoLoading.png')} />
      
    <Image
    style = {styles.circle}
    source={require('../images/Tela_carregamento/circleLoading.png')}/>

      <Image
      style = {styles.logoAuth}
      source = {require('../images/Tela_carregamento/logoAuth.png')}
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
  },

  circle: {
    width: 300,
    height: 300,
    position: 'absolute',
  }


});

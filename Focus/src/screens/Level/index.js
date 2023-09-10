import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import styles from './style';

export default function LevelScreen() {
  return (
    <View style={styles.container}>

<Image
      style = {styles.backgroundImage} 
      source = {require('../../images/tela_mapa/mathBg.png')} />

      <View style = {styles.levelContainer}>
        <View style = {styles.header}>
        <Image style = {styles.levelIndicator}
        source = {require('../../images/tela_mapa/levelIndicator.png')}/>
        <Text style = {styles.textLevel}>Nível 00</Text>
        </View>

        <View style = {styles.levelInfo}>
            <Image style = {styles.backgroundInfoImage} source={require('../../images/tela_mapa/backgroundLevelInfo.png')}/>
            <Text style = {styles.titleLevelInfo}>Objetivo</Text>
        </View>
      </View>

    </View>
  );
}
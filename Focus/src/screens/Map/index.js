import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function MapScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../../images/tela_mapa/bg.png')} style = {styles.container}/>

    <View style = {styles.bottomArea}>
        <TouchableOpacity style = {styles.levelBottom1}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>
        </View>
    </View>
  );
}
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

export default function StartScreen() {

  const navigation = useNavigation()

  const handlePlay = () => {
    navigation.navigate("MainTab")
  }

  return (

    <View style={styles.container}>
      <Image source={require('../../images/startScreen/bg.png')} style={styles.container} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Pause')}>
          <Image source={require('../../images/startScreen/config.png')} style={styles.configImg} />
        </TouchableOpacity>
      </View>

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImg} />
      <TouchableOpacity  onPress={handlePlay}><Text style={styles.playButton}>Jogar</Text></TouchableOpacity>

      <View style={styles.footer}>
        <Image source={require('../../images/startScreen/rodapé.png')} style={styles.authImg} />
      </View>

    </View>

  )
}
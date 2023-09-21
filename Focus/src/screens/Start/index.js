import React from 'react';
import {  View, Text, Image } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'

export default function StartScreen() {

const navigation = useNavigation()

const handlePlay = () => {
  navigation.navigate("MainTab")
}

  return (

    <View style = {styles.container}>
        <Image source = {require('../../images/Tela_inicio/bg.png')} style = {styles.container}/>

        <View style = {styles.header}>
        <TouchableOpacity>
            <Image source = {require('../../images/Tela_inicio/config.png')}style = {styles.configImg} />
          </TouchableOpacity>
          </View>
          
          <Image source = {require('../../images/Tela_inicio/focusWord.png')} style = {styles.focusImg}/>
          <TouchableOpacity style = {styles.playButton} onPress = {handlePlay}>Jogar</TouchableOpacity>

          <View style = {styles.footer}>
          <Image source = {require('../../images/Tela_inicio/rodapé.png')} style = {styles.authImg}/>
          </View>

    </View>

  )
}
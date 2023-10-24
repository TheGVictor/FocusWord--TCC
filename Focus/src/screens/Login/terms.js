import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Terms() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>

      <Image source = {require('../../images/startScreen/focusWord.png')} style = {styles.focusImgTerms}/>

      <View style = {styles.termsContent}>
        
        <Text style = {styles.titleTerms}>Política de Privacidade</Text>

        <Text style = {styles.textTerms}>bla bla bla</Text>

      </View>
      
      
    </SafeAreaView>
    
  );
  
}

import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function LoginYearScreen() {

  const navigation = useNavigation()
  const [year, setYear] = useState('')

  const handleSaveYear = async () => {
    if (year) {
      try {
        await AsyncStorage.setItem('year', year)
      } catch (error) {
        alert.error('Erro ao salvar o seu ano de nascimento! Código: ' + error)
      }
      navigation.navigate('EmailScreen')
    }
  }

  const formatInput = (date) => {
    const numeric = date.replace(/\D/g, ' ')

    if (numeric <= 2) {
      setYear(numeric)

    }
    else if (numeric.length <= 4) {
      setYear(`${numeric.slice(0, 2)}/${numeric.slice(2)}`);
    }
    else {
      setYear(`${numeric.slice(0, 2)}/${numeric.slice(2, 4)}/${numeric.slice(4, 8)}`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImg} />

      <View style={styles.mainContent}>
        <Text style={styles.textInform}>Informe seu ano de nascimento</Text>
        <TextInput
        maxLength={10}
          style={styles.inputText}
          placeholder='Digite sua data de nascimento'
          onChangeText={(text) => formatInput(text)}
          keyboardType="numeric"
          value={year}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleSaveYear}>
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>

  );

}

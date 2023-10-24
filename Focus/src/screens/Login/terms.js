import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Terms() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImgTerms} />

      <View style={styles.termsContent}>

        <Text style={styles.titleTerms}>Política de Privacidade</Text>

        <Text style={styles.textTerms}>Este aplicativo é mantido e operado por AUTH.</Text>
        <Text style={styles.textTerms}>Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso aplicativo. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</Text>

        <Text style={styles.textTerms}>
          Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:
          •  Quem deve utilizar nosso aplicativo;
          • Quais dados coletamos e o que fazemos com eles;
          • Seus direitos em relação aos seus dados pessoais; e
          • Como entrar em contato conosco.
          </Text>

      </View>


    </SafeAreaView>

  );

}

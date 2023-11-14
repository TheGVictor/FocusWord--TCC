import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import styles from './stylesModal'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalConfig() {

  const [userName, setUserName] = useState(null);

  const gettingInfo = async () => {
    try {
      const requestName = await AsyncStorage.getItem('userName');
      setUserName(requestName)
    } catch (error) {
      console.error('Erro ao recuperar o nome do usuário:', error);
      return null;
    }
  };

  useEffect(() => {
    gettingInfo(); 
  }, []);

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.mainText}>Configuração</Text>
        {userName && <Text style = {styles.userName}>{userName}</Text>}
      </View>

      {/* <View style = {styles.modalContent}>
        <TouchableHighlight></TouchableHighlight>

        <TouchableHighlight></TouchableHighlight>

        <TouchableHighlight></TouchableHighlight>

        <TouchableHighlight></TouchableHighlight>
      </View> */}
    </View>

  )
}


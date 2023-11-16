import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, TouchableHighlight, Switch } from 'react-native'
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

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.mainText}>Configuração</Text>
        {userName && <Text style={styles.userName}>{userName}</Text>}
      </View>

      <View style={styles.modalContent}>

        <View style={styles.stayConect}>

          <Image source={require('../../images/mapScreen/icon_profile.png')} style = {styles.iconModal}/>

          <Text style={styles.textModalContent}>Manter-se conectado</Text>
          <Switch
            style = {{position: 'absolute', right: 10}}
            trackColor={{ false: '#767577', true: '#FF8126' }}
            thumbColor='#FFF'
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled} />

        </View>

        <View style={styles.support}>

        <Image source={require('../../images/mapScreen/icon_support.png')} style = {styles.iconModal}/>

          <Text style={styles.textModalContent}>Suporte aos pais</Text>
        </View>

        <View style={styles.security}>

        <Image source={require('../../images/mapScreen/icon_security.png')} style = {styles.iconModal}/>

          <Text style={styles.textModalContent}>Política de Segurança</Text>
        </View>

        <View style={styles.closeApp}>

        <Image source={require('../../images/mapScreen/icon_close.png')} style = {styles.iconModal}/>

          <Text style={styles.textModalContent}>Fechar o aplicativo</Text>
        </View>

      </View>

      <View style = {styles.footer}>
        <Image source={require('../../images/mapScreen/auth.png')} style = {{height: 35, width: 70}}/>
      </View>
    </View>

  )
}


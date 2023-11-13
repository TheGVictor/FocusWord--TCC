import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './stylesModal'

export default function ModalConfig() {

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.mainText}>Configuração</Text>
         <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
          <Image source={require('../../images/mapScreen/exit.png')} style={{ height: 20, width: 20, }} />
        </TouchableOpacity>
      </View>
    </View>

  )
}


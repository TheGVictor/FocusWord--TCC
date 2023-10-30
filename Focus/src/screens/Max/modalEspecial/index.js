import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from '../styleModal';

export default function ModalCamisa() {

  const [currentXP, setCurrentXP] = useState(0);
  const maxXP = 1000;

  const handleGainXP = () => {
    const newXP = currentXP + 100;
    setCurrentXP(Math.min(newXP, maxXP));
  };
  const xpPercentage = (currentXP / maxXP) * 100;

  const [isSelected, setIsSelected] = useState(false)

  const handleSelectedItem = () => {
    setIsSelected(!isSelected)
}

  return (

    <View style={styles.container}>

      <View style={styles.barArea}>
        <View style={styles.bgBar}>
          <View style={[styles.bar, { width: `${xpPercentage}%` }]} />
        </View>
        <TouchableOpacity onPress={handleGainXP}>
          <Text style={styles.buttonText}>Ganhar XP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentXP(0)}>
          <Text style={styles.buttonText}>Resetar XP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.maxImg}>
        <Image source={require('../../../images/maxScreen/max.png')} style={{ height: 340, width: 170 }} />
      </View>

      <View style={styles.itemArea}>

        <TouchableOpacity onPress={handleSelectedItem} style = {{borderWidth: isSelected ? 3 : 0, borderColor: isSelected ? '#DF5D01' : 'null', borderRadius: isSelected ? 20 : 0}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={styles.itemLocked} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSelectedItem} style = {{borderWidth: isSelected ? 3 : 0, borderColor: isSelected ? '#DF5D01' : 'null', borderRadius: isSelected ? 20 : 0}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={styles.itemLocked} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSelectedItem} style = {{borderWidth: isSelected ? 3 : 0, borderColor: isSelected ? '#DF5D01' : 'null', borderRadius: isSelected ? 20 : 0}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={styles.itemLocked} />
        </TouchableOpacity>

      </View>
    </View>

  )
}


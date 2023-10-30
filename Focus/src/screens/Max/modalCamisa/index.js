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

  const [isSelected1, setIsSelected1] = useState(false)
  const [isSelected2, setIsSelected2] = useState(false)
  const [isSelected3, setIsSelected3] = useState(false)

  const handleSelectedItem = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false); 
    setIsSelected3(false); 
  
}
const handleSelectedItem2 = () => {
  setIsSelected2(!isSelected2);
  setIsSelected1(false); 
  setIsSelected3(false); 

}
const handleSelectedItem3 = () => {
  setIsSelected3(!isSelected3);
  setIsSelected1(false); 
  setIsSelected2(false); 

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

        <TouchableOpacity onPress={handleSelectedItem} style = {{}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={!isSelected1 ? styles.itemLocked : styles.itemSelect} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSelectedItem2} style = {{}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={!isSelected2 ? styles.itemLocked : styles.itemSelect} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSelectedItem3} style = {{}}>
          <Image source={require('../../../images/maxScreen/lockMax.png')} style={!isSelected3 ? styles.itemLocked : styles.itemSelect} />
        </TouchableOpacity>

      </View>
    </View>

  )
}


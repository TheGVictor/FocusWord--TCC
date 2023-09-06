import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function MapScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../../images/tela_mapa/bg.png')} style = {styles.container}/>


{/* Primeira parte */}
    <View style = {styles.bottomArea}>
        <TouchableOpacity style = {styles.levelBottom1}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom2}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

         <TouchableOpacity style = {styles.levelBottom3}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom4}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom5}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.specialBottom1}>
            <Image source={require('../../images/tela_mapa/specialLevel.png')} style = {styles.SpecialBottom}/>
        </TouchableOpacity>
        
{/* Segunda parte */}

        {/*<TouchableOpacity style = {styles.levelBottom6}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom7}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom8}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom9}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom10}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom11}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity> */}
        </View>
    </View>
  );
}
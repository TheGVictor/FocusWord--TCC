import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {

    const navigation = useNavigation()
        

  return (
    <View style={styles.container}>
        <Image source={require('../../images/tela_mapa/bg.png')} style = {styles.container}/>


{/* Primeira parte */}
    <View style = {styles.bottomArea}>
        <TouchableOpacity style = {styles.levelBottom1} onPress={() => navigation.navigate("Level")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom2} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

         <TouchableOpacity style = {styles.levelBottom3} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom4} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom5} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.specialBottom1} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/specialLevel.png')} style = {styles.specialBottom}/>
        </TouchableOpacity>
        
{/* Segunda parte */}

        <TouchableOpacity style = {styles.levelBottom6} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom7} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom8} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom9} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

         <TouchableOpacity style = {styles.levelBottom10} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.specialBottom2} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/specialLevel.png')} style = {styles.specialBottom}/>
        </TouchableOpacity> 

{/* Terceira parte */} 

            <TouchableOpacity style = {styles.levelBottom11} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.levelBottom12} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom13} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom14} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.levelBottom15} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style = {styles.levelBottom}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.specialBottom3} onPress={() => navigation.navigate("")}>
            <Image source={require('../../images/tela_mapa/specialLevel.png')} style = {styles.specialBottom}/>
        </TouchableOpacity> 



  
        </View>
    </View>
  );
}
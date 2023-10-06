import React, {useState, useEffect} from 'react';
import { View, Image, TouchableHighlight } from 'react-native'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import LoadingScreen from '../Loading';


export default function MapScreen() {

    const navigation = useNavigation()

    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 750)
    }, [])

    return (

        <View style = {{flex: 1}}>
        {isLoading ? (<LoadingScreen/>) : (
        <View style={styles.container}>

            <Image source={require('../../images/tela_mapa/bg.png')} style={styles.container} />
            <Image source = {require('../../images/tela_mapa/ceu.png')} style = {styles.skyImage}/>


            {/* Primeira parte */}

            <View style = {styles.buttomArea}>
            
                <TouchableHighlight style={styles.levelBottom1} onPress={() => navigation.navigate("LevelOne")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom2} onPress={() => navigation.navigate("LevelTwo")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom3} onPress={() => navigation.navigate("LevelThree")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom4} onPress={() => navigation.navigate("LevelFour")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom5} onPress={() => navigation.navigate("LevelFive")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.specialBottom1} onPress={() => navigation.navigate("")}>
                    <Image source={require('../../images/tela_mapa/specialLevel.png')} style={styles.specialBottom} />
                </TouchableHighlight>

                {/* Segunda parte */}

                <TouchableHighlight style={styles.levelBottom6} onPress={() => navigation.navigate("LevelSix")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom7} onPress={() => navigation.navigate("LevelSeven")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom8} onPress={() => navigation.navigate("LevelEight")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom9} onPress={() => navigation.navigate("LevelNine")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom10} onPress={() => navigation.navigate("LevelTen")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.specialBottom2} onPress={() => navigation.navigate("")}>
                    <Image source={require('../../images/tela_mapa/specialLevel.png')} style={styles.specialBottom} />
                </TouchableHighlight>

                {/* Terceira parte */}

                <TouchableHighlight style={styles.levelBottom11} onPress={() => navigation.navigate("LevelEleven")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom12} onPress={() => navigation.navigate("LevelTwelve")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom13} onPress={() => navigation.navigate("LevelThirteen")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom14} onPress={() => navigation.navigate("LevelFourteen")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.levelBottom15} onPress={() => navigation.navigate("LevelFifteen")}>
                    <Image source={require('../../images/tela_mapa/bottomIncomplete.png')} style={styles.levelBottom} />
                </TouchableHighlight>

                <TouchableHighlight style={styles.specialBottom3} onPress={() => navigation.navigate("")}>
                    <Image source={require('../../images/tela_mapa/specialLevel.png')} style={styles.specialBottom} />
                </TouchableHighlight>
                </View>
            </View>
            )}
            </View>
    );
}
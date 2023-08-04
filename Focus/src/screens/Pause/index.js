import React from "react";
import { View, Image, TouchableOpacity } from "react-native"
import styles from "./style";

export default function PauseScreen() {
    return(
        <View style = {styles.container}>
            
        <Image
        source = {require('../../images/Tela_saída/pauseImage.png')}
        style = {styles.maxImg}
        />

        <View style = {styles.buttonArea}>
        <TouchableOpacity style = {styles.backGame}>
            Voltar ao jogo
            <Image source = {require('../../images/Tela_saída/buttonPause.png')} style = {styles.buttonPause}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.exitGame}>
            Sair
        </TouchableOpacity>
        <TouchableOpacity style = {styles.login}>
            Login
        </TouchableOpacity>
        </View>
        </View>
    )
}

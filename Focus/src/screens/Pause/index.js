import React from "react";
import { View, Image, TouchableOpacity } from "react-native"
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function PauseScreen() {



    return(
        <View style = {styles.container}>
            
            <View style = {styles.borderArea}>
        <Image
        source = {require('../../images/Tela_saída/pauseImage.png')}
        style = {styles.maxImg}
        />

        <View style = {styles.buttonArea}>
        <TouchableOpacity style = {styles.backGame}>
            Voltar ao jogo
        </TouchableOpacity>
        <TouchableOpacity style = {styles.exitGame}>
            Sair
        </TouchableOpacity>
        <TouchableOpacity style = {styles.login}>
            Login
        </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

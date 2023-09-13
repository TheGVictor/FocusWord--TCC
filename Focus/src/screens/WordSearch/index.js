import { SafeAreaView, View, Image, Text, Alert } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import WordSearchGame from "./game";



export default function WordScreen() {
    
    const navigation = useNavigation()

    return(

    <View style={styles.container}>
        <Image source={require('../../images/TelaDoCacaPalavras/bg/matbg.png')} style = {styles.bg}/>
       
        <SafeAreaView style={styles.header}>
            <View style = {styles.headerContent}>
                <View style = {styles.leftSideHeader}>
            <Text style= {styles.textHeader}>03 <br/>Profissões</Text>
            
                <View style={styles.textHeaderWords}>
                  07/07
            </View>
            </View>

        <TouchableOpacity style = {styles.buttonConfigIcon}
                        activeOpacity={0.5} onPress={() => navigation.navigate("Pause")}>
                           <Image
                           style = {styles.configIcon}
                           source = {require('../../images/TelaDoCacaPalavras/config.png')}/>
                    </TouchableOpacity>
        </View>
        </SafeAreaView>
        
         
        <View style={styles.main}>
            
          </View>

         
        

        <View style={styles.Caption}>
            <Text style={styles.textCaption}>Dica</Text>
        </View>
    </View>
    )
    }


    import React, { Component } from 'react';

      


    
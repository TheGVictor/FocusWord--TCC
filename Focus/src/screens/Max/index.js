import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function MaxScreen() {
    const [currentXP, setCurrentXP] = useState(0);
    const maxXP = 1000; 

    const handleGainXP = () => {
        const newXP = currentXP + 100;
        setCurrentXP(Math.min(newXP, maxXP));
    };
    const xpPercentage = (currentXP / maxXP) * 100;

    const navigation = useNavigation()

    return (

        <View style={styles.container}>
            <Image source={require('../../images/maxScreen/fundo.png')} style={styles.container}></Image>

            <View style={styles.barArea}>
                <View style = {styles.bgBar}>
                    <View style={[styles.bar, { width: `${xpPercentage}%` }]} />
                </View>
                <Text style={styles.xpText}>{`${currentXP} / ${maxXP} XP`}</Text>
                <TouchableOpacity onPress={handleGainXP}>
                    <Text style={styles.buttonText}>Ganhar XP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentXP(0)}>
                    <Text style={styles.buttonText}>Resetar XP</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.maxArea}>

                <View style = {styles.firstHalf}>
                    <TouchableOpacity style = {styles.camisaBt}>
                        <Image source = {require('../../images/maxScreen/camiseta.png')}  style = {styles.imageBt}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {styles.shortBt}>
                    <Image source = {require('../../images/maxScreen/short.png')} style = {styles.imageBt}/>
                    </TouchableOpacity>
                    </View>

                    <View style ={styles.secondHalf}>
                    <TouchableOpacity  style = {styles.especialBt}>
                    <Image source = {require('../../images/maxScreen/interrogação.png')} style = {styles.imageBt}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {styles.tenisBt}>
                    <Image source = {require('../../images/maxScreen/tenis.png')} style = {styles.imageBt}/>
                    </TouchableOpacity>
                    </View>

            </View>

        </View>


    );
}
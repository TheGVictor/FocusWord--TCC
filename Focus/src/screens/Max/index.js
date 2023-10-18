import React from 'react';
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function MaxScreen(){

    const navigation = useNavigation()

    return (
        
        <View style={styles.container}>
            <Image source={require('../../images/maxScreen/fundo.png')} style={styles.container}></Image>
        </View>

        
    );
}
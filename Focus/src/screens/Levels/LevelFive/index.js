import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function LevelScreenFive() {

  const navigation = useNavigation()


  return (

    <View style={styles.container}>

      <Image
        style={styles.backgroundImage}
        source={require('../../../images/TelaDoCacaPalavras/bg/portbg.png')} />

      <View style={styles.levelContainer}>
        <View style={styles.header}>
          <Image style={styles.levelIndicator}
            source={require('../../../images/tela_mapa/levelIndicator.png')} />
          <Text style={styles.textLevel}>Nível 05</Text>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image style={styles.btExit} source={require('../../../images/tela_mapa/btExit.png')} />
          </TouchableOpacity>
        </View>


        <View style={styles.levelInfo}>
          <Image style={styles.backgroundInfoImage} source={require('../../../images/tela_mapa/backgroundLevelInfo.png')} />
          <Text style={styles.titleLevelInfo}>Objetivo</Text>
          <Image style={styles.iconLevelInfo} source={require('../../../images/tela_mapa/iconTest.png')} />
          <View style={styles.textAreaLevelInfo}>
            <Text style={styles.subtitleLevelInfo}>Números de 1 a 10</Text>
            <Text style={styles.obsLevelInfo}>Obs: são a base da matemática</Text>
            <Text style={styles.obsLevelInfo}>Exemplo: Cinco</Text>
          </View>
        </View>

        <View style={styles.rewardArea}>
          <Text style={{ fontSize: 25, }}>Recompensa</Text>
        </View>

        <TouchableOpacity style={styles.btStart} onPress={() => navigation.navigate("GameFive")}>
          <Text style={{ fontSize: 30 }}>Jogar!</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
}
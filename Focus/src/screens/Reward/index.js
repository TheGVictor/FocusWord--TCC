import { SafeAreaView, View, Image, Text, ScrollView } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function RewardScreen() {

    const navigation = useNavigation()

    return (

        <View style={styles.container}>


            <SafeAreaView style={styles.header}>
                <Text style={styles.headerText}>Recompensas</Text>
                <TouchableOpacity style={styles.buttonMenuIcon}
                    activeOpacity={0.5} onPress={() => navigation.navigate('Pause')}>
                    <Image
                        style={styles.menuIcon}
                        source={require('../../images/Tela de recompensas/config.png')} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView style={styles.rewardsArea} showsVerticalScrollIndicator={false}>

                {/* Camisas */}

                <Text style={styles.rewardAreaText}>Camisas</Text>

                <View style={styles.rewardArea}>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.reward}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/nivel01.png')}
                                style={styles.clothLocked} />
                            <Text style={styles.rewardText}>Moletom</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.reward}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/nivel01.png')}
                                style={styles.clothLocked} />
                            <Text style={styles.rewardText}>Moletom</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>
                </View>


                {/* Calças */}
                <Text style={styles.rewardAreaText}>Calças</Text>
                <View style={styles.rewardArea}>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/esboço_calca.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 02</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/esboço_calca.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 02</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                </View>
                {/* Tenis */}
                <Text style={styles.rewardAreaText}>Tênis</Text>
                <View style={styles.rewardArea}>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/esboço_tenis.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 03</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/esboço_tenis.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 03</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                </View>
                {/* Especial */}
                <Text style={styles.rewardAreaText}>Especial</Text>
                <View style={styles.rewardArea}>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/nivel01.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 06</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secondBackground}>
                        <TouchableOpacity style={styles.rewardUnlocked}>
                            <Image
                                source={require('../../images/Tela de recompensas/clothes/nivel01.png')}
                                style={styles.clothUnlocked} />
                            <Text style={styles.rewardText}>Nível 06</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.rightArrow}>
                        <Image
                            source={require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style={styles.arrow} />
                    </TouchableOpacity>

                </View>



            </ScrollView>
        </View>


    )

}


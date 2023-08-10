import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RewardScreen() {
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {styles.header}> 
                    <Text style = {styles.headerText}>Recompensas</Text>
                      <TouchableOpacity style = {styles.buttonMenuIcon}
                        activeOpacity={0.5}>
                           <Image
                           style = {styles.menuIcon}
                           source = {require('../../images/Tela de recompensas/menu.png')}/>
                    </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style = {styles.rewardsArea}>


        {/* Camisas */}
                <Text style = {styles.rewardAreaText}>Camisas</Text>
                <View style = {styles.rewardArea}>
                    <View style = {styles.secondBackground}>
                <TouchableOpacity style = {styles.reward}>
                    <Image
                    source = {require('../../images/Tela de recompensas/camisas/nivel01.png')}
                    style = {styles.clothLocked}/>
                    <Text style = {styles.rewardText}>Moletom</Text>
                </TouchableOpacity>
                </View>
                </View>

            {/* Calças */}
                <Text style = {styles.rewardAreaText}>Calças</Text>
                <View style = {styles.rewardArea}>
                    <View style = {styles.secondBackground}>
                <TouchableOpacity style = {styles.reward}>
                    <Image
                    source = {require('../../images/Tela de recompensas/camisas/nivel01.png')}
                    style = {styles.clothUnlocked}/>
                    <Text style = {styles.rewardText}>Moletom</Text>
                </TouchableOpacity>
                </View>
                </View>

            {/* Tenis */}
                <Text style = {styles.rewardAreaText}>Tênis</Text>
                <View style = {styles.rewardArea}>
                    <View style = {styles.secondBackground}>
                <TouchableOpacity style = {styles.reward}>
                    <Image
                    source = {require('../../images/Tela de recompensas/camisas/nivel01.png')}
                    style = {styles.clothUnlocked}/>
                    <Text style = {styles.rewardText}>Moletom</Text>
                </TouchableOpacity>
                </View>
                </View>

            {/* Especial */}
                <Text style = {styles.rewardAreaText}>Especial</Text>
                <View style = {styles.rewardArea}>
                    <View style = {styles.secondBackground}>
                <TouchableOpacity style = {styles.reward}>
                    <Image
                    source = {require('../../images/Tela de recompensas/camisas/nivel01.png')}
                    style = {styles.clothUnlocked}/>
                    <Text style = {styles.rewardText}>Moletom</Text>
                </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
        </View>
    )
}



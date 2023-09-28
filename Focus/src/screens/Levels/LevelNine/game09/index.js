import { SafeAreaView, View, Image, Text, Alert } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import WordSearchGame from "./game";

export default function WordScreenNine() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require('../../../../images/TelaDoCacaPalavras/bg/matbg.png')} style={styles.bg} />

            <SafeAreaView style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.textHeader}>03 <br />Profissões</Text>

                    <View style={styles.textHeaderWords}>
                        <Text>
                            07/07
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buttonConfigIcon}
                        activeOpacity={0.5} onPress={() => navigation.navigate("Pause")}>
                        <Image
                            style={styles.configIcon}
                            source={require('../../../../images/TelaDoCacaPalavras/config.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View>

                <WordSearchGame />

            </View>

            <View style={styles.caption}>
                <Text style={styles.textCaption}>Dica</Text>
            </View>
        </View>
    )
}




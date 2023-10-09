import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import WordSearchGame from "./game";

export default function WordScreenEight() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require('../../../../images/TelaDoCacaPalavras/bg/mathbg.png')} style={styles.bg} />

            <SafeAreaView style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.textHeader}>08 Profissões</Text>

                    <Text style={styles.textHeaderWords}>
                        07/07
                    </Text>

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



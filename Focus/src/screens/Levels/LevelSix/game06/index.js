import { SafeAreaView, View, Image, Text, Alert } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import WordSearchGame from "./game";

export default function WordScreenSix() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require('../../../../images/TelaDoCacaPalavras/bg/mathbg.png')} style={styles.bg} />

            <SafeAreaView style={styles.header}>
                <View style={styles.headerContent}>
<<<<<<< HEAD
                    <Text style={styles.textHeader}>06 <br/>Profissões</Text>
=======
                    <Text style={styles.textHeader}>06 Profissões</Text>
>>>>>>> 1de0c741d4121e578ae1280411d4020aaf99943d

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




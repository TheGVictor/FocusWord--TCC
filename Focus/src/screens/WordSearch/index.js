import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function WordScreen() {
    return(
    <View style={styles.container}>
        <SafeAreaView style={styles.header}>
            <Text style= {styles.textHeader}></Text>

        </SafeAreaView>
    </View>
    )
    }
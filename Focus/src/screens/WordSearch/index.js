import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function WordScreen() {
    
    return(
    <View style={styles.container}>
        <SafeAreaView style={styles.header}>
            <View style = {styles.headerContent}>
            <Text style= {styles.textHeader}>03 <br/>Profissões</Text>
        <View style={styles.textHeaderWords}>
            07/07
        </View>
        <TouchableOpacity style = {styles.buttonConfigIcon}
                        activeOpacity={0.5}>
                           <Image
                           style = {styles.configIcon}
                           source = {require('../../images/TelaDoCacaPalavras/config.png')}/>
                    </TouchableOpacity>
        </View>
        </SafeAreaView>
        <SafeAreaView style={styles.main}> 
         <View></View>
        </SafeAreaView>

        <View style={styles.Caption}>
            <Text style={styles.textCaption}>Questão </Text>
        </View>
    </View>
    )
    }




    
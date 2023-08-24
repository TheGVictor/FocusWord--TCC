import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008F8C',
        flex: 1
    },
    maxImg: {
        width: '70%',
        height: '40%',
        alignSelf: "center",
        marginTop: 100
    },

    buttonArea: {
        width: '80%',
        marginTop: 90,
        textAlign: "center",
        fontSize: 30,
        textTransform: "capitalize",
        fontFamily: 'Calibri',
        color: '#FFF',
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: '#000',
        textShadowRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: "row"
    },
    backGame: {
        height: 100,
        width: '100%',
        backgroundColor: '#766969',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row"        
    },
    buttonPause: {
        width: 60,
        height: 60,
    },
    exitGame: {
        width: '45%',
        height: 100,
        backgroundColor: '#766969',
        borderRadius: 30,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: '10%'
        
    },
    login: {
        width: '45%',
        height: 100,
        backgroundColor: '#766969',
        borderRadius: 30,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles
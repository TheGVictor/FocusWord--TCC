import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6B00',
    },
    header: {
        width: '100%',
        backgroundColor: '#6045e9',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        fontWeight: '800',
        color: '#000',
        position: 'absolute'
    },

    buttonMenuIcon: {
        marginLeft: 400
    },
    menuIcon: {
        height: 40,
        width: 40,
    },

    // area total das recompensas
rewardsArea: {  
        height: 'auto',
        width: '80%',
        alignSelf: 'center'
    },

    // area de cada recompensa por setor
    rewardArea: {
        paddingTop: 15,
        paddingLeft: 20
    },

    rewardAreaText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
        letterSpacing: 1,
        marginTop: 20,
        fontFamily: "Ultra', serif;"
    },

    // cada objeto individual
    reward: {
        backgroundColor: '#DAC398',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowRadius: 10,
    },

    rewardText: {
        color: '#6045e9',
        fontWeight: 'bold',
        fontSize: 15
    },

    clothLocked: {
        width: 63,
        height: 58,
        marginBottom: 10
    },
    clothUnlocked: {
        width: 63,
        height: 58,
        marginBottom: 10
    },

    secondBackground: {
        backgroundColor: '#DEAA44',
        width: 'fit-content',
        padding: 13,
        borderRadius: 25,
        borderBottomColor: '#000',
    }
})

export default styles
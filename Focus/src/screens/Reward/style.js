import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7DFBC',
    },
    mainContainer: {
        flexDirection: 'row'
    },

    firstContainer: {

    },
    secondContainer: {
        marginTop: 50,
        marginLeft: 50
    },
    header: {
        width: '100%',
        backgroundColor: '#0FC2C0',
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
        width: '85%',
        alignSelf: 'center',
        paddingBottom: '20%',
    },

    // area de cada recompensa por setor

    rewardAreaText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
        letterSpacing: 1,
        marginTop: 20,
        fontFamily: "Ultra', serif;",
        marginLeft: 80
    },

    // cada objeto individual
    reward: {
        backgroundColor: '#E39621',
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

    rewardArea: {
        paddingTop: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
    },


    rewardUnlocked: {
        backgroundColor: '#',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        shadowColor: '#000',

    },

    rewardText: {
        color: '#0019FF',
        fontWeight: 'bold',
        fontSize: 15
    },

    clothLocked: {
        width: 60,
        height: 55,
        marginBottom: 10
    },
    clothUnlocked: {
        width: 67,
        height: 63,
        marginBottom: 10,
    },

    arrow: {
        width: 60,
        height: 60
    },

    secondBackground: {
        backgroundColor: '#E39621',
        width: 'fit-content',
        padding: 13,
        borderRadius: 25,
        borderBottomColor: '#000',
        shadowColor: '#000',
        shadowRadius: 10,
    },

    TabBar: {
        height: '100%'
    }
})

export default styles
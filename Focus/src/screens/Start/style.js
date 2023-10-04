import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },

    focusImg: {
        height: '30%',
        width: '70%',
        marginTop: 30
    },

    playButton: {
        marginTop: 200,
        backgroundColor: '#015958',
        width: 150,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        fontSize: 25,
        textTransform: 'uppercase',
        color: '#FFF',
        letterSpacing: 2,
        fontWeight: 700,
        textShadowColor: '#000',
        textShadowRadius: 5,
    },

    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },

    authImg: {
        marginRight: 100,
        width: 180,
        height: 50
    },


    configImg: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginRight: 20
    },

    header: {
        width: '100%',
        alignItems: 'flex-end',
        position: 'absolute',
    }



}
)

export default styles
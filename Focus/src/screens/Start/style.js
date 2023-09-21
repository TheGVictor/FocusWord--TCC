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
        width: '60%',
        marginTop: 30
    },

    playButton: {
        marginTop: 200,
        backgroundColor: '#015958',
        width: 200,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        fontSize: 30,
        textTransform: 'uppercase',
        color: '#FFF',
        fontFamily: 'Calibri',
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
        minWidth: 200,
        minHeight: 55
    },


    configImg: {
        width: 40,
        height: 40,
        right: 20,
        top: 20
    },

    header: {
        width: '100%',
        alignItems: 'flex-end',
        position: 'absolute',
    }



    }
)

export default styles
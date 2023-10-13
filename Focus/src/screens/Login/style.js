import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    focusImg: {
        width: '30%',
        height: '30%',
        marginLeft: '70%'
    },

    mainContent: {
        position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       width: '100%',
       marginTop: '50%'
    },

    textInform: {
        fontSize: 30,
        textTransform: 'uppercase',
        marginBottom: '30%',
        color: '#666',
        fontWeight: 800,
        textAlign: 'center',
    },

    inputText: {
        width: '80%',
        height: '12%',
        borderRadius: 15,
        backgroundColor: '#E0DCDC',
        textAlign: 'center',
        color: '#666',
        marginBottom: '50%'
    },

    textButton: {
        textTransform: 'uppercase',
        color: '#FFF',
        fontWeight: 900,
        fontSize: 20
    },

    button: {
        backgroundColor: '#DF5D01',
        padding: 15,
        borderRadius: 20
    }
    
    }
)

export default styles
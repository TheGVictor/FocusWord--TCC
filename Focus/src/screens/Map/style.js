import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        
    }, 

    bottomArea: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    levelBottom: {
        width: 60,
        height: 60,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor: '#888',
        borderRadius: 30        
    },

    levelBottom1: {
        marginTop: 550
    }
    
    }
)

export default styles
import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        
    },

    barArea: {
        alignItems: 'center'
    },

    bgBar: {
        marginTop: '15%',
        marginLeft: '15%',
        width: '50%',
        backgroundColor: '#FFF',
        position:'absolute',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#FF8126'
    },

    bar: {
        height: '100%',
        backgroundColor: '#FF8126',
      },
      xpText: {
        marginTop: 5,
        textAlign: 'center',
        
      },
      buttonText: {
        marginTop: 10,
        color: '#FF0',
        textAlign: 'center',
        marginBottom: 30
      },
}
);

export default styles
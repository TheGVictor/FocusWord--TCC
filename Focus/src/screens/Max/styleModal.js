import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F7F7',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        height: '83%',
        borderRadius: 30
    }, 
      barArea: {
        alignItems: 'center'
      },
    
      bgBar: {
        marginTop: '15%',
        marginLeft: '15%',
        width: '50%',
        backgroundColor: '#FFF',
        position: 'absolute',
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

      maxImg:{
        marginTop: '35%',
        alignSelf: 'center',
        position: 'absolute',
      },

      itemArea: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginTop: 450,
        justifyContent: 'space-around'
    },

      itemLocked: {
        width: 100,
        height: 100
      }
})

export default styles;
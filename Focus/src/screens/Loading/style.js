import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#015958',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      logo: {
        width: 250,
        height: 250,
        borderRadius: 150
      },
      logoAuth: {
        width: 90,
        height: 45,
        bottom: 10,
        position: 'absolute'
      },
    
      circle: {
        width: 300,
        height: 300,
        position: 'absolute',
      }
    
    }
)

export default styles
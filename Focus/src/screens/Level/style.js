import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(2, 2, 2, 0.9)'
    },
    
    backgroundImage: {
        flex: 1,
        opacity: '0.2',
    
    },

    header: {
        width: '100%',
        top: -30,
        position: 'absolute',
        alignItems: 'center',
        
    },

    levelContainer: {
        backgroundColor: '#DAC398',
        width: '75%',
        height: '50%',
        marginTop: 125,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        borderWidth: 10,
        borderColor: '#FF3527',
        borderRadius: 20
    },

    levelIndicator: {       
        width: '80%', 
        height: 50,
    },

    textLevel: {
        fontFamily: 'Oleo Script',
        position: 'absolute',
        fontSize: 35,  
    },

    levelInfo: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        top: 40,
        position: 'absolute'
    },

    backgroundInfoImage: {
        width: '85%',
        height: '35%'        
    },

    titleLevelInfo: {
        fontFamily: 'Oleo Script', 
        textTransform: 'uppercase',
        position: 'absolute',
        top: 15, 
        fontSize: 20
    }
      
})

export default styles
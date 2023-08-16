import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BF0AFF',
        flexDirection: 'column',
        alignItems:'center',


    },
    header:{
        width: '98%',
        backgroundColor: '#C99BE4',
        marginTop: 10,
        borderRadius:15,
    },

    headerContent : {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 5,
        paddingBottom:5
    },

    textHeader:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 400,
    },

    configIcon: {
        height: 30,
        width: 30
    },

    textHeaderWords: {
        backgroundColor: '#9574A8',
        padding: 15,
        width: 200,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 600,
        fontFamily: 'sans-serif',
        borderRadius: 13,
        color:  '#FFF',
    },

    main:{
        backgroundColor: 'white',
        width: 390,
        height: 612,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 50,
        shadowRadius: 7,
    },

    Caption:{
        marginTop:50,
        backgroundColor: 'white',
        padding: 5,
        width: '50%',
        borderRadius: 20,
    },

    textCaption:{
        textAlign: 'center',
        fontWeight:'bold',
        
    }
    

    
})

export default styles
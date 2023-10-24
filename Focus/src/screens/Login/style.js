import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    focusImg: {
        width: '30%',
        height: '30%',
        marginLeft: '70%'
    },

    focusImgTerms: {
        width: '30%',
        height: '30%',
    },

    mainContent: {
        position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       width: '100%',
       marginTop: '50%'
    },

    termsContent:{
        padding: 30
    },

    textTerms: {
        color: '#686868',
    },

    titleTerms:{
        textAlign: 'center',
        color: '#515151',
        fontSize: 22,
        fontWeight: 700,
        textTransform:'uppercase',
        paddingBottom: 10
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

    aceppt: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#686868',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: '40%'
    },


    terms: {    
        fontWeight: 700,
        color: '#FF8126'
    },

    
    
    }
)

export default styles
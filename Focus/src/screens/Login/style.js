import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    focusImg: {
        width: '30%',
        height: '30%',
        
    },

    focusImgTerms: {
        width: 120,
        height: 100,
        position: 'absolute',
        
    },

    container: {
        marginTop: '5%',
    },

    mainContent: {
        position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       width: '100%',
    },

    termsContent:{
        paddingHorizontal: 30,
        paddingVertical: '25%'        
    },

    textTerms: {
        color: '#646464',
        fontSize: 15, 
        fontWeight: 600,
       textAlign: 'justify'

    },

    titleTerms:{
        textAlign: 'center',
        color: '#515151',
        fontSize: 22,
        fontWeight: 700,
        textTransform:'uppercase',
        paddingBottom: 20,
        paddingTop: 20
    },

    subtitleTerms: {
        color: '#515151',
        fontSize: 18,
        fontWeight: 900,
        textTransform:'capitalize',
        paddingBottom: 10,
        paddingTop: 10
    },

    textInform: {
        fontSize: 30,
        textTransform: 'uppercase',
        marginBottom: '30%',
        color: '#666',
        fontWeight: 800,
        textAlign: 'center',
        marginTop: '40%'
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

    button: {
        backgroundColor: '#DF5D01',
        padding: 15,
        borderRadius: 20,
    },

    buttonTerms: {
        backgroundColor: '#DF5D01',
        padding: 15,
        borderRadius: 20,
        width: '30%',
        alignSelf: 'center',
        marginTop: '15%'
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

    logoAuth: {
        position: 'absolute',
        bottom: 0,
        width: '30%',
        height: '3%',
        alignSelf: 'center',
    }

    
    
    }
)

export default styles
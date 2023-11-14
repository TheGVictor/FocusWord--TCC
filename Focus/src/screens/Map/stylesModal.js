import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: '80%',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F7F7',
        marginTop: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    header: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: 'rgba(2, 2, 2, 0.2)',
        borderBottomWidth: 5,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
    },

    mainText: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 25
    },

    userName: {
        fontSize: 25,
        marginTop: 20,
        color: '#FF8126',
        fontWeight: 800,
        textTransform: 'capitalize'
    },

    modalContent: {
        backgroundColor: '#FF0',
        marginTop: 20,
        width: '100%'
    }


}
)

export default styles
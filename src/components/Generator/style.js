import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: '100%',
        width: '100%',
        paddingTop: 300
    },

    Title: {
        alignItems: "center",
        paddingBottom: 30
    },

    TitleText: {
        color: '#B00405',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20
    },
    
    LineHead_1: {
        height: 20,
        fontWeight: "bold",
        width: 250,
        borderBottomColor: '#E60001',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    LineHead_2: {
        top: 10,
        width: 350,
        borderBottomColor: '#E60001',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    FormContainer:{
        alignItems: "center",
        marginTop: 10
    },

    Label: {
        color: '#B00405',
        fontSize: 20,
        fontWeight: "bold"
    },

    ErrorMessage: {
        color: '#7B0708'
    },
    
    Input: {
        marginTop: 10,
        borderColor: '#E60001',
        borderWidth: 2,
        borderRadius: 20,
        width: '75%',
        height: 45,
        textAlign: "center",
        fontSize: 20,
        color: '#B00405'
    },

    Button: {
        backgroundColor: '#B00405',
        height: 50,
        width: 170,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 20,
        shadowColor: '#B00405',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 20,
    },

    ButtonText: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 10
    },

    ResultBox: {
        borderColor: '#E60001',
        height: 200,
        width: 325,
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 40,
        alignItems: "center"
    },

    ResultText: {
        color: '#B00405',
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 75
    }
})

export default styles
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        backgroundColor: '#fff',
        marginTop: '40%',
        alignItems: 'center',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        width: '100%',
        flex: 1
    },

    pointer: {
        width: 65,
        height: 9,
        borderRadius: 6,
        backgroundColor: '#121214',
        marginVertical: 15
    },

    logo: {
        flex: 1
    },

    textLogoStyle: {
        color: '#121214',
    },

    loginForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonsView: {
        flex: 1,
        backgroundColor: '#faa',
        width: '100%',
    }
})
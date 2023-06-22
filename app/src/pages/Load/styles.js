import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonsContainer: {
      flex: 3, 
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonLogIn: {
      backgroundColor: '#fff',
      width: 285,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
  
    textButton: {
      fontSize: 18,
      color: '#000'
    },

    textSingIn: {
      color: '#fff',
      marginTop: 12
    }
  });
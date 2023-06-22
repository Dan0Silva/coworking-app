import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { useFonts } from 'expo-font';
import BoldText from '../../components/BoldText/Index';

import styles from './styles';

export default props => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
  });
  
  const imagePath = require('../../assets/images/logo.jpg')

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imagePath} style={styles.image}/>
        
        <Text style={styles.test}>
          <BoldText>Cool</BoldText>-Working
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.buttonLogIn}>
          <Text style ={styles.textButton}>Log In</Text>
        </TouchableHighlight>
        
        <Text style={{color: '#fff', marginTop: 12}}>
          Don't have an account? 
          
          <BoldText> Sing In</BoldText>
        </Text>
      </View>
    </View>
  );
}



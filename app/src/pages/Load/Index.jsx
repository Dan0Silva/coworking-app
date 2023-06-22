import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import Text from '../../components/Text/Index';
import Logo from '../../components/Logo/Index';
import styles from './styles';

export default props => {
  const imagePath = require('../../assets/images/logo.jpg')

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.buttonLogIn}>
          <Text bold style={styles.textButton}>Log In</Text>
        </TouchableHighlight>
        
        <Text style={styles.textSingIn}>
          Don't have an account? 
          
          <Text bold> Sing In</Text>
        </Text>
      </View>
    </View>
  );
}



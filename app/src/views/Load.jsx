import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default props => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  const imagePath = require('../../assets/images/logo.jpg')

  const Bold = (props) => 
    <Text style={styles.bold} >{props.children}</Text>

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imagePath} style={styles.image}/>
        <Text style={styles.test}>
          <Bold>Cool</Bold>-Working
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.buttonLogIn}>
          <Text style ={styles.textButton}>Log In</Text>
        </TouchableHighlight>
        <Text style={{color: '#fff', marginTop: 12}}>
          Don't have an account? 
          <Bold> Sing In</Bold>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginBottom: 12
  },

  bold: {
    fontWeight: 'bold'
  },

  test: {
    fontSize: 18,
    color: '#fff'
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
    fontFamily: 'Inter-Bold',
    color: '#000'
  }
});

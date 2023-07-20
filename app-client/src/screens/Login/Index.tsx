import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import TextInput from '../../components/TextInput/Index'
import Button from '../../components/Button1/Index'
import Bold from '../../components/Bold/Index'
import { StackTypes } from '../../routes/Login.routes'

import styles, { logo } from './styles'

export default () => {
  const [image] = useState(require('../../assets/icon.png'))
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false)
  const navigation = useNavigation<StackTypes>()

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsVisible(true)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsVisible(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const logoStyle = !keyboardIsVisible ? styles : logo

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={logoStyle.logoContainer}>
          <Image source={image} style={logoStyle.image} />
          <Text style={logoStyle.title}>CoolWorking</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Button
            title={'Login'}
            onPress={() => {
              navigation.navigate('home')
            }}
          />
        </View>

        {!keyboardIsVisible ? (
          <>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
              <Text style={styles.lineText}>or</Text>
              <View style={styles.line}></View>
            </View>

            <View style={styles.buttonsContainer}>
              <Button title={'Login with google'} icon={'logo-google'} />

              <View style={styles.singinContainer}>
                <Text style={styles.textSingin}>Don't have an account?</Text>

                <TouchableOpacity>
                  <Bold style={styles.textSingin}> Sing in</Bold>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

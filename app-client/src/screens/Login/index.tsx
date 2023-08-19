import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import validator from 'validator'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button1'
import Bold from '../../components/Bold'
import { StackTypes } from '../../routes/Login.routes'

import styledComp from './styles'

export default () => {
  // const { state, dispatch } = useContext(AuthContext)

  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false)
  const [image] = useState(require('../../assets/images/icon.png'))
  const [email, setEmail] = useState('')

  const navigation = useNavigation<StackTypes>()

  const handleInputMailChange = (text: string) => {
    setEmail(text)
  }

  const validationMail = () => {
    if (!validator.isEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'Email invalido',
        text2: 'Por favor, tente novamente',
      })

      return
    }
    //validar com a api -->
    if (true) {
      navigation.navigate('loginConfirmation')
    }
  }

  const logoStyle = () => {
    if (keyboardIsVisible) {
      return (
        <>
          <styledComp.LogoImageSeparate source={image} />
          <styledComp.TitleSeparate>CoolWorking</styledComp.TitleSeparate>
        </>
      )
    }
    return (
      <>
        <styledComp.LogoImage source={image} />
        <styledComp.Title>CoolWorking</styledComp.Title>
      </>
    )
  }

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

  useEffect(() => {
    // redux authContext
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <styledComp.Container>
        <styledComp.LogoContainer>{logoStyle()}</styledComp.LogoContainer>

        <styledComp.FormContainer>
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={handleInputMailChange}
          />

          <Button
            title={'Login'}
            onPress={() => {
              validationMail()
            }}
          />
        </styledComp.FormContainer>

        {!keyboardIsVisible ? (
          <>
            <styledComp.LineContainer>
              <styledComp.Line />
              <styledComp.LineText>or</styledComp.LineText>
              <styledComp.Line />
            </styledComp.LineContainer>

            <styledComp.ButtonsContainer>
              <Button
                title={'Login with google'}
                icon={'logo-google'}
                onPress={() => {
                  navigation.navigate('loginConfirmation')
                }}
              />

              <styledComp.SigninContainer>
                <styledComp.TextSignin>
                  Don't have an account?
                </styledComp.TextSignin>

                <TouchableOpacity>
                  <styledComp.TextSignin>
                    <Bold> Sing in</Bold>
                  </styledComp.TextSignin>
                </TouchableOpacity>
              </styledComp.SigninContainer>
            </styledComp.ButtonsContainer>
          </>
        ) : (
          <></>
        )}
      </styledComp.Container>
    </TouchableWithoutFeedback>
  )
}

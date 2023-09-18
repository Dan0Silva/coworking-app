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

import * as S from './styles'

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
          <S.LogoImageSeparate source={image} />
          <S.TitleSeparate>CoolWorking</S.TitleSeparate>
        </>
      )
    }
    return (
      <>
        <S.LogoImage source={image} />
        <S.Title>CoolWorking</S.Title>
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
      <S.Container>
        <S.LogoContainer>{logoStyle()}</S.LogoContainer>

        <S.FormContainer>
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={handleInputMailChange}
          />

          {/* <S.ForgotPassword>
            <S.TouchableText onPress={() => console.warn('enviado')}>
              <Bold>Forgot Password</Bold>
            </S.TouchableText>
          </S.ForgotPassword> */}

          <Button
            title={'Login'}
            onPress={() => {
              validationMail()
            }}
          />
        </S.FormContainer>

        {!keyboardIsVisible ? (
          <>
            <S.LineContainer>
              <S.Line />
              <S.LineText>or</S.LineText>
              <S.Line />
            </S.LineContainer>

            <S.ButtonsContainer>
              <Button
                title={'Login with google'}
                icon={'logo-google'}
                onPress={() => {
                  navigation.navigate('loginConfirmation')
                }}
              />

              <S.SigninContainer>
                <S.TouchableText>Don't have an account?</S.TouchableText>

                <TouchableOpacity>
                  <S.TouchableText
                    onPress={() => navigation.navigate('createAccount')}>
                    <Bold> Sing in</Bold>
                  </S.TouchableText>
                </TouchableOpacity>
              </S.SigninContainer>
            </S.ButtonsContainer>
          </>
        ) : (
          <></>
        )}
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

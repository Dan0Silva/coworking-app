import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button1'
import Bold from '../../components/Bold'
import { StackTypes } from '../../routes/Login.routes'
import api from '../../services/apitest'

import styledComp from './styles'

export default () => {
  const [image] = useState(require('../../assets/images/icon.png'))
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false)
  const navigation = useNavigation<StackTypes>()

  const [u, setU] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get('/users')
      setU(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados:', error)
    }
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
    fetchData()
  }, [])

  const logoStyle = () => {
    if (keyboardIsVisible) {
      return (
        <>
          <styledComp.LogoImageSeparate source={image} />
          <styledComp.TitleSeparate>CoolWorking</styledComp.TitleSeparate>
        </>
      )
    } else {
      return (
        <>
          <styledComp.LogoImage source={image} />
          <styledComp.Title>CoolWorking</styledComp.Title>
        </>
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <styledComp.Container>
        <styledComp.LogoContainer>{logoStyle()}</styledComp.LogoContainer>

        <styledComp.FormContainer>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Button
            title={'Login'}
            onPress={() => {
              navigation.navigate('loginConfirmation')
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
                  fetchData()
                  console.warn(u)
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

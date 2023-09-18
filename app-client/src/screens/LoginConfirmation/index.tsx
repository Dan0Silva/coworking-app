import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import InputCode from '../../components/InputCode'
import Button from '../../components/Button1'

export default () => {
  const navigation = useNavigation<StackTypes>()
  const [validationCode, setValidationCode] = useState(0)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.TitleContainer>
          <S.BackButton>
            <S.BackIcon
              name={'arrow-back'}
              size={32}
              onPress={() => {
                navigation.goBack()
              }}
            />
          </S.BackButton>
          <S.Title>Code Sent</S.Title>
        </S.TitleContainer>

        <S.SubtitleContainer>
          <S.Subtitle>Please type the verification code</S.Subtitle>
          <S.Subtitle>sent to you</S.Subtitle>
        </S.SubtitleContainer>

        <InputCode />

        <S.ButtonContainer>
          <Button
            title={'Verify'}
            onPress={() => {
              navigation.navigate('home')
            }}
          />
        </S.ButtonContainer>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

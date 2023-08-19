import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import InputCode from '../../components/LoginComponents/InputCode'
import Keyboard from '../../components/LoginComponents/Keyboard'

export default () => {
  const navigation = useNavigation<StackTypes>()

  return (
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
        <S.Title>SMS Sent</S.Title>
      </S.TitleContainer>

      <S.SubtitleContainer>
        <S.Subtitle>Check the code sent to your number:</S.Subtitle>
        <S.Subtitle>(62) 9 9977-6655</S.Subtitle>
      </S.SubtitleContainer>

      <InputCode />
      <Keyboard />
    </S.Container>
  )
}

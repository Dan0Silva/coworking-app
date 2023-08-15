import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import InputCode from '../../components/LoginComponents/InputCode'

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

      <InputCode />
    </S.Container>
  )
}

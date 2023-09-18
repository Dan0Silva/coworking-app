import React from 'react'
import TextInput from '../../components/TextInput'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import { StatusBar } from 'expo-status-bar'

export default () => {
  const navigation = useNavigation<StackTypes>()

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.BackButton>
          <S.BackIcon
            name={'arrow-back'}
            size={32}
            onPress={() => {
              navigation.goBack()
            }}
          />
        </S.BackButton>

        <S.SubheaderContainer>
          <S.Title>Create Account</S.Title>
          <S.Subtitle>Step 1</S.Subtitle>
        </S.SubheaderContainer>
      </S.HeaderContainer>
      <StatusBar style={'light'} />
    </S.Container>
  )
}

import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'

interface Props {
  title: string
  subtitle?: string
  backButton?: Function | null
}

export default (props: Props) => {
  const navigation = useNavigation<StackTypes>()

  return (
    <S.HeaderContainer>
      <S.BackButton>
        <S.BackIcon
          name={'arrow-back'}
          size={32}
          onPress={() => {
            {
              props.backButton ? props.backButton() : navigation.goBack()
            }
          }}
        />
      </S.BackButton>

      <S.Title>{props.title}</S.Title>
    </S.HeaderContainer>
  )
}

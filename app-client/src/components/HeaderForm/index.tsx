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

  const Subtitle = () => {
    if (props.subtitle) {
      return <S.Subtitle>{props.subtitle}</S.Subtitle>
    }
  }

  return (
    <S.HeaderContainer style={!props.subtitle ? { height: 180 } : {}}>
      <S.BackButton>
        <S.BackIcon
          name={'arrow-back'}
          size={32}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </S.BackButton>

      <S.SubheaderContainer style={!props.subtitle ? { marginBottom: 10 } : {}}>
        <S.Title>{props.title}</S.Title>
        {Subtitle()}
      </S.SubheaderContainer>
    </S.HeaderContainer>
  )
}

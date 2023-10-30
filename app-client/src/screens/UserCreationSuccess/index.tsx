import React from 'react'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import Logo from '../../assets/images/sucess.svg'
import Header from '../../components/Header'
import Button1 from '../../components/Button1'

export default () => {
  const navigation = useNavigation<StackTypes>()

  return (
    <S.Container>
      <Header
        title="Parabéns!"
        backButton={() => navigation.navigate('login')}
      />
      <Logo width={280} height={280} />

      <S.Text>Você concluiu o cadastro com sucesso!</S.Text>
      <S.Subtext>Prossiga para logar com sua nova conta</S.Subtext>

      <S.ButtonContainer>
        <Button1
          title="test"
          onPress={() => {
            navigation.navigate('login')
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  )
}

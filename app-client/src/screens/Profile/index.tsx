import React from 'react'

import * as S from './styles'

export default () => {
  const profile = require('../../assets/images/profile.jpeg')

  return (
    <S.Container>
      <S.Title>Perfil</S.Title>

      <S.ImageContainer>
        <S.Image source={profile} />
        <S.Name>Eduardo Marconi</S.Name>
      </S.ImageContainer>

      <S.OptionsContainer>
        <S.FieldContainer>
          <S.FieldName>E-mail</S.FieldName>
          <S.FieldValue>eduardo_marconi@mail.com</S.FieldValue>
        </S.FieldContainer>

        <S.EditContainer>
          <S.EditIcon name={'ios-pencil-sharp'} size={26} color={'black'} />
        </S.EditContainer>
      </S.OptionsContainer>

      <S.Line />

      <S.OptionsContainer>
        <S.FieldContainer>
          <S.FieldName>CPF</S.FieldName>
          <S.FieldValue>***.***.***-09</S.FieldValue>
        </S.FieldContainer>

        <S.EditContainer>
          <S.EditIcon name={'ios-pencil-sharp'} size={26} color={'black'} />
        </S.EditContainer>
      </S.OptionsContainer>

      <S.Line />

      <S.OptionsContainer>
        <S.FieldContainer>
          <S.FieldName>Phone Number</S.FieldName>
          <S.FieldValue>(62) 99988-7766</S.FieldValue>
        </S.FieldContainer>

        <S.EditContainer>
          <S.EditIcon name={'ios-pencil-sharp'} size={26} color={'black'} />
        </S.EditContainer>
      </S.OptionsContainer>
    </S.Container>
  )
}

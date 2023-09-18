import React, { useState } from 'react'

import * as S from './styles'

export default () => {
  const defaultState = ''

  const [code, setCode] = useState(defaultState)
  const RenderValidationCodeInputFields = () => {
    return (
      <S.Container>
        <S.InputText
          autoCapitalize={'characters'}
          caretHidden={true}
          inputMode={'numeric'}
          keyboardType={'number-pad'}
          maxLength={6}
          onChangeText={setCode}
        />
      </S.Container>
    )
  }

  return <S.Container>{RenderValidationCodeInputFields()}</S.Container>
}

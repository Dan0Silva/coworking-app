import React, { useState } from 'react'

import * as S from './style'

const defaultState = [0, 0, 0, 0, 0, 0]

export default () => {
  const [code, setCode] = useState(defaultState)

  const RenderValidationCodeInputFields = () => {
    return (
      <>
        {code.map((item, index) => (
          <S.OtpBox key={index}>
            <S.OtpInput
              cursorColor={'#000'}
              editable={false}
              keyboardType={'numeric'}
              maxLength={1}
              placeholder={item.toString()}
            />
          </S.OtpBox>
        ))}
      </>
    )
  }

  return <S.Container>{RenderValidationCodeInputFields()}</S.Container>
}

import React, { useState } from 'react'

import * as S from './styles'

export default () => {
  const defaultState = ['0', '0', '0', '0', '0', '0']
  const [code, setCode] = useState(defaultState)

  const RenderValidationCodeInputFields = () => {
    return (
      <S.Container>
        {code.map((item, index) => (
          <S.GradiantBox
            key={index}
            colors={[
              'rgba(248,205,69,1)',
              'rgba(255,198,20,1)',
              'rgba(206,159,14,1)',
              'rgba(144,107,35,1)',
            ]}>
            <S.OtpBox>
              <S.OtpInput
                cursorColor={'#000'}
                editable={false}
                value={code[index]}
                keyboardType={'numeric'}
                maxLength={1}
                placeholder={item}
              />
            </S.OtpBox>
          </S.GradiantBox>
        ))}
      </S.Container>
    )
  }

  return <S.Container>{RenderValidationCodeInputFields()}</S.Container>
}

import React, { useState } from 'react'

import * as S from './style'

const defaultState = [0, 0, 0, 0, 0, 0]

export default () => {
  const [code, setCode] = useState(defaultState)

  return (
    <S.Container>
      <S.FlatList
        data={code}
        horizontal
        renderItem={(item: { item: number }) => {
          return (
            <S.OtpBox>
              <S.OtpInput
                cursorColor={'#000'}
                editable={false}
                keyboardType={'numeric'}
                maxLength={1}
                placeholder={item.item.toString()}
              />
            </S.OtpBox>
          )
        }}
      />
    </S.Container>
  )
}

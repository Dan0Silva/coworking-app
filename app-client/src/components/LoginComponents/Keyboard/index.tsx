import React from 'react'

import * as S from './styles'

export default () => {
  return (
    <S.Container>
      <S.Line>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.Line>
      <S.Line>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.Line>
      <S.Line>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.Line>
      <S.Line noLine>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.Line>
    </S.Container>
  )
}

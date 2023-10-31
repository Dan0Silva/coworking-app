import React from 'react'

import * as S from './styles'

import SpaceCard from '../../components/SpaceCard'

export default () => {
  return (
    <S.Container>
      <S.Feed>
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </S.Feed>
    </S.Container>
  )
}

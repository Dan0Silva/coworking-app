import React from 'react'

import * as S from './styles'
import ResolutSpaceCard from '../../components/ResolutSpaceCard'

export default () => {
  const spacesList = require('../../assets/mocks/spaces_2.json')

  const renderSpaces = () => {
    return spacesList.map((space: any, index: any) => {
      return (
        <ResolutSpaceCard
          key={index}
          spaceName={space.space.title}
          image={space.space.image}
          address={space.space.address}
        />
      )
    })
  }

  return (
    <S.Container>
      <S.Feed>
        <S.SearchContainer>
          <S.SearchBar placeholder={'try searching for something...'} />
          <S.FilterContainer>
            <S.FilterIcon name={'funnel'} size={24} color={'#000'} />
          </S.FilterContainer>
        </S.SearchContainer>

        <S.Line />

        {renderSpaces()}
      </S.Feed>
    </S.Container>
  )
}

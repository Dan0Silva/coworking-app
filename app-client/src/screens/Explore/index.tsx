import React from 'react'

import * as S from './styles'

import SpaceCard from '../../components/SpaceCard'

const spacesList = require('../../assets/mocks/spaces.json')

export default () => {
  const renderSpaces = () => {
    return spacesList.map((space: any, index: any) => {
      return (
        <SpaceCard
          key={index}
          nameSpace={space.space.title}
          uriIcon={space.space.icon}
          uriImage={space.space.image}
          address={space.space.address}
          rating={space.space.rating}
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

        <S.NotificationContainer>
          <S.NotificationText>
            Será um prazer enorme receber novos convidados no aplicativo,
            convide seus amigos e parentes a tentar reservar uma sala pelo app!
          </S.NotificationText>
          <S.NotificationIcon
            name={'notifications'}
            size={24}
            color={'white'}
          />
        </S.NotificationContainer>

        <S.ContainerFeed>{renderSpaces()}</S.ContainerFeed>

        {/* <S.Feed>
        
      </S.Feed> */}
      </S.Feed>
    </S.Container>
  )
}

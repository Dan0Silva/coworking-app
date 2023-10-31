import React from 'react'

import * as S from './styles'

export default () => {
  const profileSpacePhoto = require('../../assets/images/icon.png')
  const coworkingImage = require('../../assets/images/coworking.jpg')

  return (
    <S.Container>
      <S.HeadContainer>
        <S.NameSpace>Eureca CoWorking</S.NameSpace>
        <S.ProfileSpacePhoto source={profileSpacePhoto} />
      </S.HeadContainer>

      <S.Image source={coworkingImage}>
        <S.AddressContainer>
          <S.AddressIcon
            name={'ios-location-sharp'}
            size={18}
            color={'rgb(235, 12, 12)'}
          />
          <S.AddressText>221B, Baker Street, London</S.AddressText>
        </S.AddressContainer>
      </S.Image>

      <S.FooterContainer>
        <S.SubFooterContainer>
          <S.PriceText>R$ 42.99</S.PriceText>
          <S.RatingContainer>
            <S.SpaceRatingIcon
              name="star"
              size={18}
              color={'rgb(255, 221, 0)'}
            />
            <S.SpaceRatingText> 4.5</S.SpaceRatingText>
          </S.RatingContainer>
        </S.SubFooterContainer>
        <S.ReserveButton
          onPress={() => {
            console.warn('ola')
          }}>
          <S.TextReserveButton>Reserve</S.TextReserveButton>
        </S.ReserveButton>
      </S.FooterContainer>
    </S.Container>
  )
}

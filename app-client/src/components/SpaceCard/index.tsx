import React from 'react'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'
import { ViewProps } from 'react-native'

interface Props extends ViewProps {
  nameSpace: string
  uriIcon: string
  uriImage: string
  address: string
  rating: string
}

export default (props: Props) => {
  const profileSpacePhoto = require('../../assets/images/icon.png')
  const coworkingImage = require('../../assets/images/coworking.jpg')

  const { nameSpace, uriIcon, uriImage, address, rating } = props

  const navigator = useNavigation<StackTypes>()

  return (
    <S.Container>
      <S.HeadContainer>
        <S.NameSpace>{nameSpace}</S.NameSpace>
        <S.ProfileSpacePhoto
          source={{
            uri: uriIcon,
          }}
        />
      </S.HeadContainer>

      <S.BackImage>
        <S.Image
          source={{
            uri: uriImage,
          }}></S.Image>
      </S.BackImage>

      <S.FooterContainer>
        <S.SubFooterContainer>
          <S.AddressContainer>
            <S.AddressIcon
              name={'ios-location-sharp'}
              size={18}
              color={'rgb(235, 12, 12)'}
            />
            <S.AddressText>{address}</S.AddressText>
          </S.AddressContainer>
          <S.RatingContainer>
            <S.SpaceRatingIcon
              name="star"
              size={18}
              color={'rgb(255, 221, 0)'}
            />
            <S.SpaceRatingText> {rating}</S.SpaceRatingText>
          </S.RatingContainer>
        </S.SubFooterContainer>
        <S.ReserveButton
          onPress={() => {
            navigator.navigate('spaceScreen')
          }}>
          <S.TextReserveButton>Reserve</S.TextReserveButton>
        </S.ReserveButton>
      </S.FooterContainer>
    </S.Container>
  )
}

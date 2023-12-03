import React from 'react'

import * as S from './styles'
import { ViewProps } from 'react-native'

interface Props extends ViewProps {
  spaceName: string
  image: string
  address: string
}

export default (props: Props) => {
  const { spaceName, image, address } = props

  return (
    <S.Container>
      <S.subContainer>
        <S.ImageContainer>
          <S.Image
            source={{
              uri: image,
            }}
          />
        </S.ImageContainer>

        <S.OptionsContainer>
          <S.SpaceName>{spaceName}</S.SpaceName>
          <S.AddressContainer>
            <S.AddressIcon
              name={'ios-location-sharp'}
              size={18}
              color={'rgb(235, 12, 12)'}
            />
            <S.AddressText>{address}</S.AddressText>
          </S.AddressContainer>
        </S.OptionsContainer>
      </S.subContainer>
    </S.Container>
  )
}

import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const width = Math.floor(Dimensions.get('window').width)

export const Container = styled.View`
  width: 100%;
`

export const HeadContainer = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`

export const NameSpace = styled.Text`
  font-weight: 500;
  font-size: 22px;
`

export const ProfileSpacePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`

export const Image = styled.ImageBackground`
  width: 100%;
  justify-content: flex-end;
  height: ${width}px;
  background-color: #f0f0f0;
`

export const AddressContainer = styled.View`
  height: 35px;
  margin: 12px;
  flex-direction: row;
  border-radius: 12px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  align-items: center;
`

export const AddressIcon = styled(Ionicons)`
  width: 20px;
  height: 20px;
`

export const AddressText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 1px;
  margin-left: 6px;
`

export const FooterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 80px;
`

export const SubFooterContainer = styled.View`
  width: 250px;
  height: 80%;
  margin-top: 8px;
  padding-left: 12px;
`

export const PriceText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: rgb(0, 195, 255);
`

export const RatingContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const SpaceRatingIcon = styled(Ionicons)`
  width: 20px;
  height: 20px;
`

export const SpaceRatingText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: rgb(255, 221, 0);
`

export const ReserveButton = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 195, 255);
`

export const TextReserveButton = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`

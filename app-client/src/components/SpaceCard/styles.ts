import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const width = Math.floor(Dimensions.get('window').width)

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
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

export const BackImage = styled.View`
  overflow: hidden;
  border-radius: 12px;
`

export const Image = styled.ImageBackground`
  width: 100%;
  justify-content: flex-end;
  height: ${width * 0.9}px;
  background-color: #f0f0f0;
`

export const FooterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 80px;
`

export const SubFooterContainer = styled.View`
  width: 200px;
  height: 80%;
  margin-top: 8px;
  padding-left: 12px;
`

export const AddressContainer = styled.View`
  height: 35px;
  flex-direction: row;
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
  font-size: 14px;
  margin-left: 6px;
  font-weight: 500;
  /* color: rgb(255, 221, 0); */
`

export const ReserveButton = styled.TouchableOpacity`
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
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

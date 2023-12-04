import styled from 'styled-components/native'
import { ThemeType } from '../../themes/styled'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
`

export const Feed = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`

export const Image = styled.ImageBackground`
  width: 100%;
  height: 260px;
`

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 30, 30, 0.6);
`

export const BackIcon = styled(Ionicons)``

export const CountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  width: 50px;
  height: 26px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 6px;
`

export const ContImage = styled.Text`
  font-size: 17px;
  font-weight: 600;
`

export const SpaceNameContainer = styled.View`
  height: 120px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`

export const SpaceName = styled.Text`
  font-size: 30px;
  font-weight: 800;
`

export const SubFooterContainer = styled.View`
  height: 70px;
  margin-right: 20px;
  margin-top: 8px;
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
  font-size: 16px;
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
  font-size: 16px;
  margin-left: 6px;
  font-weight: 500;
`

export const Line = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  height: 2px;
  margin-left: 20px;
  margin-right: 20px;
`

export const DescriptionContainer = styled.View`
  margin: 20px;
`

export const AltTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`

export const LocationContainer = styled.View`
  margin: 20px;
`

export const LocationElement = styled.View`
  background-color: rgb(12, 12, 12);
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  margin-top: 10px;
`

export const LocationText = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: white;
`

export const AssessmentsContainer = styled.View`
  margin: 20px;
`

export const AssessmentsSubContainer = styled.ScrollView`
  height: 140px;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -20px;
  margin-right: -20px;
`

export const Asscessment = styled.View`
  width: 200px;
  height: 130px;
  overflow: hidden;
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1.5px;
  border-color: rgba(0, 0, 0, 0.6);
  elevation: 3;
`

export const AssessmentHeader = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px;
  flex-direction: row;
  background-color: white;
`

export const AssessmentImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 40px;
`

export const AssessmentName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`

export const AssessmentDescriptionContainer = styled.View`
  background-color: white;
  flex: 1;
  padding-left: 14px;
  padding-top: 8px;
  padding-right: 14px;
  padding-bottom: 10px;
`

export const AssessmentDescription = styled.Text`
  font-size: 14px;
`

export const OwnerContainer = styled.View`
  height: 120px;
  margin: 20px;
`

export const OwnerSubContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 100%;
`

export const OwnerHeader = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

export const OwnerImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 20px;
`

export const OwnerNameContainer = styled.View``

export const OwnerName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

export const VerifiedContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`

export const VerifiedIcon = styled(Ionicons)``

export const VerifiedText = styled.Text`
  margin-left: 4px;
  margin-bottom: 2px;
`

export const Button = styled.TouchableOpacity`
  background-color: #121212;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`

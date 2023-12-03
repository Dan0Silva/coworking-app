import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  height: 96px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 4px;
`

export const subContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: white;
  border-radius: 16px;
  elevation: 3;
`

export const ImageContainer = styled.View`
  width: 90px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 63px;
  height: 63px;
  border-radius: 10px;
`

export const OptionsContainer = styled.View`
  flex: 1;
  justify-content: center;
`

export const SpaceName = styled.Text`
  font-size: 16px;
  font-weight: 500;
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
  margin-left: 4px;
`

import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'
import styled from 'styled-components/native'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
`

export const Title = styled.Text`
  font-size: 32px;
  margin-top: 60px;
  margin-left: 20px;
  font-weight: 600;
`

export const ImageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 20px;
  border-radius: 20px;
  elevation: 5;
`

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 90px;
`

export const Name = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  height: 90px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const FieldContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  height: 100%;
`

export const FieldName = styled.Text`
  font-size: 18px;
  font-weight: 700;
`
export const FieldValue = styled.Text`
  font-size: 16px;
  font-weight: 500;
`

export const EditContainer = styled.View`
  width: 80px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const EditIcon = styled(Ionicons)``

export const Line = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  height: 2px;
  margin-left: 20px;
  margin-right: 20px;
`

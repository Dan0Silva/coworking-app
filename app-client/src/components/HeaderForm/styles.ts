import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

export const HeaderContainer = styled.View`
  width: 100%;
  height: 210px;
  border-radius: 0 0 20px 20px;
  justify-content: space-between;
  padding: 23px;
  padding-top: 50px;

  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND_BUTTON};
`

export const SubheaderContainer = styled.View`
  margin-bottom: 20px;
  margin-left: 5px;
`

export const BackButton = styled.TouchableHighlight`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const BackIcon = styled(Ionicons)`
  color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
`

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
`

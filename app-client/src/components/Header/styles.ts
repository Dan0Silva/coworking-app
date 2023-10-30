import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

export const HeaderContainer = styled.View`
  width: 100%;
  height: 140px;
  align-items: center;
  border-radius: 0 0 20px 20px;
  flex-direction: row;
  padding: 23px;
  padding-top: 50px;
`

export const BackButton = styled.TouchableHighlight`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const BackIcon = styled(Ionicons)`
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

export const Title = styled.Text`
  flex: 1;
  font-size: 32px;
  font-weight: 600;
  margin-right: 33px;
  margin-bottom: 4px;
  text-align: center;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

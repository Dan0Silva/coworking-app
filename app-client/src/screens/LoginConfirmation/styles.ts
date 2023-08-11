import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
  padding: 23px;
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

export const Title = styled.Text`
  flex: 1;
  margin-top: 2px;
  margin-left: 23px;
  font-size: 32px;
  font-weight: bold;
`

export const BackButton = styled.TouchableHighlight`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`

export const BackIcon = styled(Ionicons)``

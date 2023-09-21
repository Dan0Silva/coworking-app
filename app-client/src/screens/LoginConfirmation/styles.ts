import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
`

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 42px;
  margin-bottom: 82px;
  flex-direction: row;
`

export const Title = styled.Text`
  flex: 1;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
  margin-left: 23px;
  font-size: 32px;
  font-weight: bold;
`

export const SubtitleContainer = styled.View`
  width: 270px;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  margin-bottom: 53px;
`

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
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

export const ButtonContainer = styled.View`
  flex: 1;
  padding: 23px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 42px;
`

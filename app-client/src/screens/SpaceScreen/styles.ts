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
  background-color: rgba(240, 240, 240);
  width: 60px;
  height: 26px;
  margin-top: auto;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 6px;
`

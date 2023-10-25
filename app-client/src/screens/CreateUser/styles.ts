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
  /* padding: 23px; */
  padding-top: 0px;
`

export const ContainerForm = styled.View`
  height: 56%;
  width: 100%;
  padding: 23px;
  /* background-color: red; */
  margin-top: 15px;
  align-items: center;
`

export const ContainerButton = styled.View`
  height: 120px;
  width: 100%;
  padding: 23px;
  justify-content: center;
  align-items: center;
`

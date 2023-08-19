import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { ThemeType } from '../../../themes/styled'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

export const OtpBox = styled.View`
  width: 35px;
  height: 45px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
`

export const GradiantBox = styled(LinearGradient)`
  width: 40px;
  height: 50px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const OtpInput = styled.TextInput`
  font-size: 21px;
  font-weight: 400;
  text-align: center;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

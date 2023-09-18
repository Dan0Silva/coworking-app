import styled from 'styled-components/native'
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

export const LogoContainer = styled.View`
  flex: 1.5;
  margin-top: 22px;
  width: 100%;
  justify-content: space-evenly;
  padding-left: 12px;
`

export const LogoImage = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 12px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

export const FormContainer = styled.View`
  flex: 2;
  width: 100%;
  justify-content: space-around;
  margin-top: 60px;
`

export const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Line = styled.View`
  height: 1px;
  width: 140px;
  border-radius: 12px;
  background-color: ${(props: Props) => props.theme.COLORS.LINE};
`

export const LineText = styled.Text`
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
  margin: 0 26px;
`

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
`

export const SigninContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`

export const TouchableText = styled.Text`
  font-size: 16px;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

export const LogoContainerSeparate = styled.View`
  flex: 1;
  margin-top: 52px;
  width: 100%;
  justify-content: space-evenly;
  padding-left: 12px;
`

export const LogoImageSeparate = styled.Image`
  height: 104px;
  width: 104px;
  border-radius: 12px;
`

export const TitleSeparate = styled.Text`
  font-size: 26px;
  margin-top: 16px;
  font-weight: 600;
  color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

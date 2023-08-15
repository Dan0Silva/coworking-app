import styled from 'styled-components/native'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

const styledComp = {
  Container: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND};
    padding: 23px;
  `,

  LogoContainer: styled.View`
    flex: 1.5;
    margin-top: 22px;
    width: 100%;
    justify-content: space-evenly;
    padding-left: 12px;
  `,

  LogoImage: styled.Image`
    height: 130px;
    width: 130px;
    border-radius: 12px;
  `,

  Title: styled.Text`
    font-size: 32px;
    font-weight: 600;
    color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
  `,

  FormContainer: styled.View`
    flex: 2;
    width: 100%;
    justify-content: space-evenly;
  `,

  LineContainer: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  Line: styled.View`
    height: 1px;
    width: 140px;
    border-radius: 12px;
    background-color: ${(props: Props) => props.theme.COLORS.LINE};
  `,

  LineText: styled.Text`
    color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
    margin: 0 26px;
  `,

  ButtonsContainer: styled.View`
    flex: 1;
    width: 100%;
    justify-content: space-around;
  `,

  SigninContainer: styled.View`
    justify-content: center;
    flex-direction: row;
  `,

  TextSignin: styled.Text`
    font-size: 16px;
    color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
  `,

  LogoContainerSeparate: styled.View`
    flex: 1;
    margin-top: 52px;
    width: 100%;
    justify-content: space-evenly;
    padding-left: 12px;
  `,

  LogoImageSeparate: styled.Image`
    height: 104px;
    width: 104px;
    border-radius: 12px;
  `,

  TitleSeparate: styled.Text`
    font-size: 26px;
    margin-top: 16px;
    font-weight: 600;
    color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
  `,
}

export default styledComp

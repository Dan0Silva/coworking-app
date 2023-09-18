import styled from 'styled-components/native'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

export const InputText = styled.TextInput`
  height: 60px;
  width: 300px;
  border-bottom-width: 2px;
  padding: 10px;
  text-align: center;
  font-size: 32px;
  border-bottom-color: ${(props: Props) => props.theme.COLORS.TEXT_PRIMARY};
`

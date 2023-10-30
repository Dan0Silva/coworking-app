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
`

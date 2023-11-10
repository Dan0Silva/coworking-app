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

export const Feed = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`

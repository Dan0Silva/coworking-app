import styled from 'styled-components/native'
import { ThemeType } from '../../../themes/styled'

interface Props {
  theme: ThemeType
  noLine?: boolean
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 82px;
  justify-content: center;
  width: 100%;
`

export const Line = styled.View`
  flex: 1;
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom-width: ${(props: Props) => (props.noLine ? '0px' : '2px')};
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  background-color: red;
`

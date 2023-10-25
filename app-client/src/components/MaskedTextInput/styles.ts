import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

const styledComp = {
  Container: styled.View`
    width: 100%;
    height: 54px;
    border-radius: 12px;
    justify-content: center;
    padding: 0 12px;

    background: ${(props: Props) => props.theme.COLORS.BACKGROUND_INPUT};
  `,

  TextInput: styled(MaskedTextInput)`
    font-size: 16px;
    color: ${(props: Props) => props.theme.COLORS.TEXT_LABEL};
  `,
}

export default styledComp

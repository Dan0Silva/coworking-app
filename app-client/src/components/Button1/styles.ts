import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeType } from '../../themes/styled'

interface Props {
  theme: ThemeType
}

const styledComp = {
  Container: styled.TouchableOpacity`
    height: 54px;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    background-color: ${(props: Props) => props.theme.COLORS.BACKGROUND_BUTTON};
  `,

  Icon: styled.View`
    flex: 2;
    align-items: center;
  `,

  Ionicons: styled(Ionicons)`
    color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
  `,

  Title_1: styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
    flex: 4;
  `,

  Title_2: styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${(props: Props) => props.theme.COLORS.TEXT_BUTTON};
  `,
}

export default styledComp

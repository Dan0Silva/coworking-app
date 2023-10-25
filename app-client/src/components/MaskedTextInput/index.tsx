import React from 'react'
import { ViewStyle } from 'react-native'

import styledComp from './styles'
import { MaskedTextInputProps } from 'react-native-mask-text'
import { ThemeType } from '../../themes/styled'
import { useTheme } from 'styled-components'

interface Props extends MaskedTextInputProps {
  theme?: ThemeType
  containerStyle?: ViewStyle
}

export default (props: Props) => {
  const { placeholder, containerStyle, ...restProps } = props
  const theme = useTheme()

  return (
    <styledComp.Container style={containerStyle}>
      <styledComp.TextInput
        {...restProps}
        cursorColor={theme.COLORS.TEXT_LABEL}
        placeholderTextColor={theme.COLORS.TEXT_LABEL}
        placeholder={placeholder}
      />
    </styledComp.Container>
  )
}

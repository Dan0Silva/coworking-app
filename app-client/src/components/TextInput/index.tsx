import React from 'react'
import { TextInputProps, ViewStyle } from 'react-native'

import styledComp from './styles'
import { ThemeType } from '../../themes/styled'
import { useTheme } from 'styled-components'

interface Props extends TextInputProps {
  theme?: ThemeType
  containerStyle?: ViewStyle
  mask?: String
}

export default (props: Props) => {
  const { placeholder, containerStyle, mask, ...restProps } = props
  const theme = useTheme()

  return (
    <styledComp.Container style={containerStyle}>
      <styledComp.TextInput
        {...restProps}
        mask={mask}
        cursorColor={theme.COLORS.TEXT_LABEL}
        placeholderTextColor={theme.COLORS.TEXT_LABEL}
        placeholder={placeholder}
      />
    </styledComp.Container>
  )
}

import React from 'react'
import { Text, TextProps } from 'react-native'

import styles from './styles'

interface BoldProps extends TextProps {
  children: string
}

export default (props: BoldProps) => {
  const { children, style, ...restProps } = props

  return (
    <Text style={[styles.bold, style]} {...restProps}>
      {children}
    </Text>
  )
}

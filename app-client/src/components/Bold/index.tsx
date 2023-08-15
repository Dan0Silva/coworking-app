import React from 'react'
import { TextProps } from 'react-native'

import styledComp from './styles'

interface BoldProps extends TextProps {
  children: string
}

export default (props: BoldProps) => {
  const { children, ...restProps } = props

  return <styledComp.Bold {...restProps}>{children}</styledComp.Bold>
}

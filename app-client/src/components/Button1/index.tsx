import React from 'react'
import { ButtonProps } from 'react-native'

import { ThemeType } from '../../themes/styled'
import styledComp from './styles'

interface Props extends ButtonProps {
  icon?: any
  title: string
  theme?: ThemeType
}

export default (props: Props) => {
  const { title, icon } = props

  return (
    <styledComp.Container onPress={props.onPress}>
      {icon ? (
        <>
          <styledComp.Icon>
            <styledComp.Ionicons name={icon} size={26} />
          </styledComp.Icon>

          <styledComp.Title_1>{title}</styledComp.Title_1>
        </>
      ) : (
        // else
        <>
          <styledComp.Title_2>{title}</styledComp.Title_2>
        </>
      )}
    </styledComp.Container>
  )
}

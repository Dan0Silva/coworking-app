import React from 'react'
import {
  Text,
  TouchableOpacity,
  ButtonProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

interface Props extends ButtonProps {
  icon?: string
  title: string
  style?: {
    container?: StyleProp<ViewStyle>
    title?: StyleProp<ViewStyle | TextStyle>
  }
}

export default (props: Props) => {
  const { title, style, icon } = props

  const componentStyle = {
    container: style?.container || styles.container,
    title: style?.title || styles.title,
  }

  return (
    <TouchableOpacity style={componentStyle.container} onPress={props.onPress}>
      {icon ? (
        <>
          <View style={styles.icon}>
            <Ionicons name={icon} size={26} color="black" />
          </View>

          <Text style={[{ flex: 4 }, componentStyle.title]}>{title}</Text>
        </>
      ) : (
        // else
        <>
          <Text style={componentStyle.title}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}

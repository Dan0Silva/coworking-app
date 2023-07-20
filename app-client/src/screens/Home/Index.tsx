import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'
import { UserContext } from '../../contexts/AuthContext'

export default () => {
  const { state, dispatch } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <Text>Esta é a home</Text>
      <Text>{`User: ${state.user};\nAuth: ${state.auth}`}</Text>
      <Button
        title={'logout'}
        onPress={() => {
          dispatch({
            type: 'LogOff',
            payload: {},
          })
        }}
      />

      <Button
        title={'login'}
        onPress={() => {
          dispatch({
            type: 'LogIn',
            payload: {
              name: 'danilo',
              email: 'danilo@mail.com',
              password: '1234',
            },
          })
        }}
      />
    </View>
  )
}

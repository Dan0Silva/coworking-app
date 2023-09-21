import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import { StatusBar } from 'expo-status-bar'
import HeaderForm from '../../components/HeaderForm'
import TextInput from '../../components/TextInput'

function renderInputs(list: Array<String>) {}

export default () => {
  const navigation = useNavigation<StackTypes>()

  return (
    <S.Container>
      <HeaderForm title={'Create Account'} subtitle={'Step 1'} />

      <S.ContainerForm>
        <TextInput
          containerStyle={{ marginBottom: 20 }}
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
        <TextInput
          placeholder="Email"
          // value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          // onChangeText={handleInputMailChange}
        />
      </S.ContainerForm>

      <StatusBar style={'light'} />
    </S.Container>
  )
}

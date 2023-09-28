import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Button1'
import HeaderForm from '../../components/HeaderForm'
import TextInput from '../../components/TextInput'

const formSteps = [
  {
    fields: ['First Name', 'Last Name', 'cpf', 'Birth Rate'],
    headerText: 'Step one',
    buttonText: 'Continue',
  },
  {
    fields: ['Email', 'Phone Number', 'Password', 'Confirm Password'],
    headerText: 'Step two',
    buttonText: 'Continue',
  },
  {
    fields: ['Photo Url'],
    headerText: 'Step three',
    buttonText: 'Register',
  },
]

const defaultUser = {
  first_name: '',
  last_name: '',
  cpf: '',
  birth_rate: '',
  email: '',
  phone_number: '',
  password: '',
  photo_ulr: '',
}

const handleString = (text: string) => {
  return text.trim().toLowerCase().replace(/\s+/g, '_')
}

export default () => {
  const navigation = useNavigation<StackTypes>()
  const [currentStep, setCurrentStep] = useState(0)
  const [user, setUser] = useState(defaultUser)

  const renderForm = () => {
    const currentFormStep = formSteps[currentStep]

    return (
      <>
        <HeaderForm
          title={'Create Account'}
          subtitle={currentFormStep.headerText}
          backButton={handlePreviousStep}
        />

        <S.ContainerForm>
          {currentFormStep.fields.map((field, index) => (
            <TextInput
              key={index}
              containerStyle={{ marginBottom: 20 }}
              placeholder={field}
              // value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              // onChangeText={handleInputMailChange}
            />
          ))}
        </S.ContainerForm>

        <S.ContainerButton>
          <Button title={currentFormStep.buttonText} onPress={handleNextStep} />
        </S.ContainerButton>
      </>
    )
  }

  const handleNextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // O usuário atingiu a última etapa, você pode enviar os dados do formulário.
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > formSteps.length - 1) {
      setCurrentStep(currentStep - 1)
    } else {
      return null
    }
  }

  return (
    <S.Container>
      {renderForm()}

      <StatusBar style={'light'} />
    </S.Container>
  )
}

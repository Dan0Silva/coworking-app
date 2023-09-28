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
  confirm_password: '',
  photo_url: '',
}

const handleString = (text: string) => {
  return text.trim().toLowerCase().replace(/\s+/g, '_')
}

export default () => {
  const navigation = useNavigation<StackTypes>()
  const [currentStep, setCurrentStep] = useState(0)
  const [user, setUser] = useState(defaultUser)

  const handleNextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      navigation.navigate('home')
    }
  }

  const handlePreviousStep = () => {
    if (currentStep != 0) {
      setCurrentStep(currentStep - 1)
    } else {
      navigation.goBack()
    }
  }

  const mapLabelToAttribute = (string: string) => {
    switch (string) {
      case 'first_name':
        return user.first_name
      case 'last_name':
        return user.last_name
      case 'cpf':
        return user.cpf
      case 'birth_rate':
        return user.birth_rate
      case 'email':
        return user.email
      case 'phone_number':
        return user.phone_number
      case 'password':
        return user.password
      case 'confirm_password':
        return user.confirm_password
      case 'photo_url':
        return user.photo_url
    }
  }

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
              value={mapLabelToAttribute(handleString(field))}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text) =>
                setUser({ ...user, [handleString(field)]: text })
              }
            />
          ))}
        </S.ContainerForm>

        <S.ContainerButton>
          <Button title={currentFormStep.buttonText} onPress={handleNextStep} />
        </S.ContainerButton>
      </>
    )
  }

  return (
    <S.Container>
      {renderForm()}

      <StatusBar style={'light'} />
    </S.Container>
  )
}

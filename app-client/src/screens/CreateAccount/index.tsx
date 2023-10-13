import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Button1'
import HeaderForm from '../../components/HeaderForm'
import TextInput from '../../components/TextInput'
import { createUser } from '../../services/api'

const formSteps = [
  {
    fields: [
      { name: 'First Name', value: 'firstName' },
      { name: 'Last Name', value: 'lastName' },
      { name: 'Cpf', value: 'cpf', mask: '999.999.999-99' },
      { name: 'Birth Date', value: 'birthDate', mask: '99/99/9999' },
    ],
    headerText: 'Step one',
    buttonText: 'Continue',
  },
  {
    fields: [
      { name: 'Email', value: 'email' },
      { name: 'Phone Number', value: 'phoneNumber', mask: '(99) 99999-9999' },
      { name: 'Password', value: 'password' },
      { name: 'Confirm Password', value: 'confirmPassword' },
    ],
    headerText: 'Step two',
    buttonText: 'Continue',
  },
  {
    fields: [{ name: 'Photo Url', value: 'profilePhoto' }],
    headerText: 'Step three',
    buttonText: 'Register',
  },
]

const defaultUser = {
  firstName: '',
  lastName: '',
  cpf: '',
  email: '',
  birthDate: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  profilePhoto: '',
}

const handleString = (text: string) => {
  return text.trim().toLowerCase().replace(/\s+/g, '_')
}

export default () => {
  const navigation = useNavigation<StackTypes>()
  const [currentStep, setCurrentStep] = useState(0)
  const [user, setUser] = useState(defaultUser)

  const validationStep = (currentStep: number) => {}

  const handleNextStep = () => {
    validationStep(currentStep)

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // navigation.navigate('home')
      console.log(user)
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
        return user.firstName
      case 'last_name':
        return user.lastName
      case 'cpf':
        return user.cpf
      case 'birth_rate':
        return user.birthDate
      case 'email':
        return user.email
      case 'phone_number':
        return user.phoneNumber
      case 'password':
        return user.password
      case 'confirm_password':
        return user.confirmPassword
      case 'photo_url':
        return user.profilePhoto
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
              mask={field.mask ? field.mask : ''}
              containerStyle={{ marginBottom: 20 }}
              placeholder={field.name}
              value={mapLabelToAttribute(handleString(field.value))}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text) => setUser({ ...user, [field.value]: text })}
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

import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'
import { isValid } from '@fnando/cpf'

import * as S from './styles'
import { StatusBar } from 'expo-status-bar'
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardTypeOptions,
} from 'react-native'
import Button from '../../components/Button1'
import HeaderForm from '../../components/HeaderForm'
import TextInput from '../../components/TextInput'
import MaskedTextInput from '../../components/MaskedTextInput'
import Toast from 'react-native-toast-message'
import { createUser } from '../../services/api'

type UserField = keyof UserType

const formSteps = [
  {
    fields: [
      {
        name: 'First Name',
        value: 'firstName',
        secure: false,
        keyboardType: 'default',
      },
      {
        name: 'Last Name',
        value: 'lastName',
        secure: false,
        keyboardType: 'default',
      },
      {
        name: 'Cpf',
        value: 'cpf',
        mask: '999.999.999-99',
        secure: false,
        keyboardType: 'numeric',
      },
      {
        name: 'Birth Date',
        value: 'birthDate',
        mask: '99/99/9999',
        secure: false,
        keyboardType: 'numeric',
      },
    ],
    headerText: 'Step one',
    buttonText: 'Continue',
  },
  {
    fields: [
      {
        name: 'Email',
        value: 'email',
        keyboardType: 'email-address',
        secure: false,
      },
      {
        name: 'Phone Number',
        value: 'phoneNumber',
        mask: '(99) 99999-9999',
        secure: false,
        keyboardType: 'numeric',
      },
      {
        name: 'Password',
        value: 'password',
        secure: true,
        keyboardType: 'default',
      },
      {
        name: 'Confirm Password',
        value: 'confirmPassword',
        secure: true,
        keyboardType: 'default',
      },
    ],
    headerText: 'Step two',
    buttonText: 'Continue',
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
}

export default () => {
  const navigation = useNavigation<StackTypes>()
  const [currentStep, setCurrentStep] = useState(0)
  const [user, setUser] = useState(defaultUser)

  const validationStep = (): ResponseJson => {
    let validateFormJson: ResponseJson = { validate: true, toast: {} }

    const validation = [
      () => {
        if (isValid(user.cpf)) {
          return { validate: true, toast: {} }
        } else {
          validateFormJson = {
            validate: false,
            toast: {
              type: 'error',
              text1: 'Erro no campo de cpf',
              text2: 'Por favor, tente novamente',
            },
          }
        }
      },
      () => {
        if (
          user.password.length != 0 &&
          user.password === user.confirmPassword
        ) {
          return { validate: true, toast: {} }
        } else {
          validateFormJson = {
            validate: false,
            toast: {
              type: 'error',
              text1: 'Problema com as senhas',
              text2: 'Favor verificar a senha',
            },
          }
        }
      },
    ]

    validation[currentStep]()
    return validateFormJson
  }

  const handleNextStep = async () => {
    const validateFormJson: ResponseJson = validationStep()

    if (currentStep < formSteps.length - 1) {
      if (validateFormJson.validate) {
        setCurrentStep(currentStep + 1)
      } else {
        Toast.show(validateFormJson.toast)
      }
    } else {
      if (validateFormJson.validate) {
        const response = await createUser(user)
        if (response.type == 'success') {
          navigation.navigate('userCreationSuccess')
        }
        Toast.show(response)
      } else {
        Toast.show(validateFormJson.toast)
      }
    }
  }

  const handlePreviousStep = () => {
    if (currentStep != 0) {
      setCurrentStep(currentStep - 1)
    } else {
      navigation.goBack()
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
          {currentFormStep.fields.map((field, index) => {
            if (field.mask) {
              return (
                <MaskedTextInput
                  key={index}
                  mask={field.mask}
                  containerStyle={{ marginBottom: 20 }}
                  placeholder={field.name}
                  value={user[field.value as UserField]}
                  autoCapitalize="none"
                  secureTextEntry={field.secure}
                  keyboardType={field.keyboardType as KeyboardTypeOptions}
                  onChangeText={(text) =>
                    setUser({ ...user, [field.value]: text })
                  }
                />
              )
            } else {
              return (
                <TextInput
                  key={index}
                  containerStyle={{ marginBottom: 20 }}
                  placeholder={field.name}
                  value={user[field.value as UserField]}
                  autoCapitalize="none"
                  secureTextEntry={field.secure}
                  keyboardType={field.keyboardType as KeyboardTypeOptions}
                  onChangeText={(text) =>
                    setUser({ ...user, [field.value]: text })
                  }
                />
              )
            }
          })}
        </S.ContainerForm>

        <S.ContainerButton>
          <Button title={currentFormStep.buttonText} onPress={handleNextStep} />
        </S.ContainerButton>
      </>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        {renderForm()}

        <StatusBar style={'light'} />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

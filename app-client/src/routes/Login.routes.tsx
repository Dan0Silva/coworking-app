import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Login from '../screens/Login'
import LoginConfirmation from '../screens/LoginConfirmation'
import CreateAccount from '../screens/CreateUser'
import UserCreationSuccess from '../screens/UserCreationSuccess'

import Auth from './Auth.routes'
import SpaceScreen from '../screens/SpaceScreen'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  login: undefined
  loginConfirmation: undefined
  home: undefined
  createAccount: undefined
  userCreationSuccess: undefined
  spaceScreen: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login">
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'home'} component={Auth} />
      <Stack.Screen name={'loginConfirmation'} component={LoginConfirmation} />
      <Stack.Screen name={'createAccount'} component={CreateAccount} />
      <Stack.Screen name={'spaceScreen'} component={SpaceScreen} />
      <Stack.Screen
        name={'userCreationSuccess'}
        component={UserCreationSuccess}
      />
    </Stack.Navigator>
  )
}

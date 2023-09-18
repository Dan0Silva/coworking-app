import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Login from '../screens/Login'
import Home from '../screens/Home'
import LoginConfirmation from '../screens/LoginConfirmation'
import CreateAccount from '../screens/CreateAccount'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  login: undefined
  loginConfirmation: undefined
  home: undefined
  createAccount: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login">
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'loginConfirmation'} component={LoginConfirmation} />
      <Stack.Screen name={'createAccount'} component={CreateAccount} />
    </Stack.Navigator>
  )
}

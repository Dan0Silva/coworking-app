import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Login from '../screens/Login/Index'
import Home from '../screens/Home/Index'
import LoginConfirmation from '../screens/LoginConfirmation/Index'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  login: undefined
  loginConfirmation: undefined
  home: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'loginConfirmation'} component={LoginConfirmation} />
    </Stack.Navigator>
  )
}

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Login from '../screens/Login/Index'
import Home from '../screens/Home/Index'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
  login: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  )
}

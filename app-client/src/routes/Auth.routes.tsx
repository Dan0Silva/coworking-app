import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator initialRouteName={'Explore'}>
      <Tab.Screen name="Explore" component={Home} />
    </Tab.Navigator>
  )
}

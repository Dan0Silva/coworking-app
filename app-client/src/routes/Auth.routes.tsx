import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Reservation from '../screens/Reservation'
import WishList from '../screens/WishList'
import Explore from '../screens/Explore'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator
      initialRouteName={'Explore'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: 'white',
          shadowOffset: { height: 0, width: 0 },
          paddingTop: 8,
          paddingBottom: 12,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wish List"
        component={WishList}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

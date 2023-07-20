import { NavigationContainer } from '@react-navigation/native'

import UserProvider from '../contexts/AuthContext'
import StackRoutes from './Login.routes'

export default () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UserProvider>
  )
}

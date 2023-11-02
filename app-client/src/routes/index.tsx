import { NavigationContainer } from '@react-navigation/native'

import AuthContext from '../contexts/AuthContext'
import LoginRoutes from './Login.routes'

export default () => {
  return (
    <AuthContext>
      <NavigationContainer>
        <LoginRoutes />
      </NavigationContainer>
    </AuthContext>
  )
}

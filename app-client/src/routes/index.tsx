import { NavigationContainer } from '@react-navigation/native'

import AuthContext from '../contexts/AuthContext'
import StackRoutes from './Login.routes'

export default () => {
  return (
    <AuthContext>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </AuthContext>
  )
}

import Routes from './src/routes'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/themes'

export default function App() {
  // test

  return (
    <ThemeProvider theme={theme.light}>
      <Routes />
      <Toast topOffset={56} />
    </ThemeProvider>
  )
}

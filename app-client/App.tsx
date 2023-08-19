import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/themes'

export default function App() {
  const mytheme = theme.light
  const handleStatusBarColor = mytheme === theme.dark ? 'light' : 'dark'

  return (
    <ThemeProvider theme={mytheme}>
      <Routes />
      <Toast topOffset={56} />
      <StatusBar style={handleStatusBarColor} />
    </ThemeProvider>
  )
}

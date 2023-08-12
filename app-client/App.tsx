import Routes from './src/routes'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/themes'

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <Routes />
    </ThemeProvider>
  )
}

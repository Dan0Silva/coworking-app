import Routes from './src/routes'
import { ThemeProvider } from 'styled-components/native'

import light from './src/themes/light'

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  )
}

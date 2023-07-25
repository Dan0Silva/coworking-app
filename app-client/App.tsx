import Routes from './src/routes/Index'
import { ThemeProvider } from 'styled-components/native'

import light from './src/themes/light'

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  )
}

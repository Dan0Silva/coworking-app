import 'styled-components'

import light from './light'

export type ThemeType = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

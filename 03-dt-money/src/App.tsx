import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobaStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobaStyle />
    </ThemeProvider>
  )
}

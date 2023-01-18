import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'

import { GlobaStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobaStyle />
    </ThemeProvider>
  )
}

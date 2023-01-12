import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobaStyle } from './styles/global'

import { CycleContextProvider } from './contexts/CyclesContext'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobaStyle />
    </ThemeProvider>
  )
}

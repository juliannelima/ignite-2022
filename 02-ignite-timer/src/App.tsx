import { ThemeProvider } from 'styled-components';

import { Button } from './components/Button';

import { defaultTheme } from './styles/themes/default';

import { GlobaStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobaStyle />
    </ThemeProvider>
  )
}


import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  yellow: '#F7FF00'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`

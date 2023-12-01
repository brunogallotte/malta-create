import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  purple: '#6B3FA0',
  gray: '#ccc'
}

export const breakpoints = {
  laptop: '1250px',
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi', monospace;
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.black};
  }
`

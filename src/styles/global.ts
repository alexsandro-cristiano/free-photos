import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
   -webkit-font-smoothing: antialiased;
   background-color: ${props => props.theme['blueviolet-100']};
  }
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  a,ul{
    text-decoration: none;
    list-style: none;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: 400;
    font-size: 1rem;
  }
`

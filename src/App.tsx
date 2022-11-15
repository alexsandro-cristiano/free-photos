import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Gallery } from './pages/Gallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Gallery />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <Logo>Mosaico</Logo>
        <ul>
          <li>
            <a href="#">My Gallery</a>
          </li>
          <li>
            <a href="#">Add Photo</a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

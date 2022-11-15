import { HeaderContainer, Navigation, Logo, NavigationList } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo>Mosaico</Logo>
        <NavigationList>
          <li>
            <a href="#">My Gallery</a>
          </li>
          <li>
            <a href="#">Add Photo</a>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  )
}

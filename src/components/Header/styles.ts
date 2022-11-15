import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${props => props.theme['blueviolet-700']};
  color: ${props => props.theme['blueviolet-100']};
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
`

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  li {
    a {
      color: ${props => props.theme['blueviolet-100']};
      transition: all 0.2s;
      &:hover {
        color: ${props => props.theme['blueviolet-300']};
      }
    }
  }
`

export const Logo = styled.h1`
  font-size: 2rem;
`

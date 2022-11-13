import styled from 'styled-components'

export const Container = styled.header`
  height: 6.5rem;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    background: ${props => props.theme['blueviolet-700']};
    color: ${props => props.theme['blueviolet-100']};

    ul {
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
    }
  }
`
export const Logo = styled.h1`
  font-size: 2rem;
`

import styled from 'styled-components'

export const Container = styled.footer`
  height: 5rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.theme['blueviolet-600']};
  color: ${props => props.theme['blueviolet-200']};
`
export const Direitos = styled.section`
  font-size: 1rem;
`
export const Midias = styled.section`
  h3 {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      a {
        color: ${props => props.theme['blueviolet-200']};
        opacity: 0.5;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`

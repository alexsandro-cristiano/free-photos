import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${props => props.theme['blueviolet-700']};
  color: ${props => props.theme['blueviolet-100']};
`
export const FooterContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
`
export const Midias = styled.section`
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    li {
      a {
        color: ${props => props.theme['blueviolet-300']};
        &:hover {
          color: ${props => props.theme['blueviolet-100']};
          transition: color 0.3s;
        }
      }
    }
  }
`

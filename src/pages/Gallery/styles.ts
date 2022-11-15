import styled from 'styled-components'

export const GalleryContainer = styled.main`
  ul {
    max-width: 1120px;
    width: 100%;
    margin: 2rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 1.2rem 1rem;
  }
`

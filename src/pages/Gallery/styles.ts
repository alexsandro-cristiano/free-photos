import styled from "styled-components";

export const GalleryContainer = styled.main`
  ul {
    max-width: 1120px;
    width: 100%;
    margin: 2rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 1.2rem 1rem;
  }
`;

export const Main = styled.main`
  margin-top: 9rem;
  min-height: 100vh;
`;
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`;
export const SubTitle = styled.span`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
export const GridImages = styled.ul`
  ul {
    width: 100%;
    margin: 2rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 1.2rem 1rem;
  }
`;

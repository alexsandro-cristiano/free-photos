import styled from "styled-components";

export const GalleryContainer = styled.main`
  margin-bottom: 2rem;
  list-style: none;
  min-height: 100vh;
  padding: 0 2rem;
  @media screen and (min-width: 500px) {
    display: grid;
    /* grid-template-columns: repeat(3fr, auto-fit); */
    grid-gap: 1.2rem 1rem;
    padding: 0 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
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
export const Grid = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.8rem;
  div {
    width: 320px;
    overflow: hidden;
    object-fit: cover;
  }
  img {
    display: block;
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
`;

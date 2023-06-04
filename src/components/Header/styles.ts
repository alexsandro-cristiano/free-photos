import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${(props) => props.theme["blueviolet-700"]};
  color: ${(props) => props.theme["blueviolet-100"]};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 1.5rem;

  justify-content: space-between;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  li {
    a {
      color: ${(props) => props.theme["blueviolet-100"]};
      transition: all 0.2s;
      &:hover {
        color: ${(props) => props.theme["blueviolet-300"]};
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

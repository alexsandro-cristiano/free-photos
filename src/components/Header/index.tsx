import { HeaderContainer, Navigation, Logo, NavigationList } from "./styles";

import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo>Free Photos</Logo>
        <NavigationList>
          <li>
            <a
              href="https://www.linkedin.com/in/alexsandro--silva/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alexsandro-cristiano"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={24} />
            </a>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  );
}

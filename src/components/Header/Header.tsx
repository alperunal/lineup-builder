import React from "react";
import Container from "../UI/Container/Container";
import { HeaderBar, HeaderContent, Logo, LogoText } from './style';

const Header = () => {
  return (
    <div>
      <HeaderBar>
        <Container>
          <HeaderContent>
            <Logo>
              <LogoText>Voet.</LogoText>
            </Logo>
          </HeaderContent>
        </Container>
      </HeaderBar>
    </div>
  );
};

export default Header;

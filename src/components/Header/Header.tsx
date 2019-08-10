import React from "react";
import styled from "styled-components";
import Container from "../UI/Container/Container";

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
      {/* <Navbar>
        <Container>
          Links
        </Container>
      </Navbar> */}
    </div>
  );
};

const HeaderBar = styled.div`
  border-top: 3px solid #0098ff;
  display: flex;
  height: 58px;
  justify-content: center;
  background: rgba(22, 28, 38, 0.5);
  color: #e5e7ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderContent = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 37px;
  color: #ffffff;
  display: flex;
  justify-content: center;

  @media (min-width: 720px) {
    display: block;
  }
`;

const Logo = styled.div`
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #fff;
  padding-left: 4px;
  padding-right: 2px;
  text-decoration: none;
  max-width: calc(100% - 12px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 3px;
  float: left;
  height: 44px;
  margin: 0 4px 0 0;
  position: relative;
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  padding-left: 8px;
  padding-right: 12px;
  font-size: 30px;
  font-weight: 700;
  line-height: 32px;
`;

const Navbar = styled.div`
  height: 40px;
  background-color: #e1e1e1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Header;

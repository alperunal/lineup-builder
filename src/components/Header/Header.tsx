import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container/Container';

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
  )
}

const HeaderBar = styled.div`
  height: 32px;
  background-color: rgba(0,0,0,.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderContent = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 37px;
  color: #FFFFFF;
`;

const Logo = styled.div`
  background: rgba(0,0,0,.3);
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
  height: 32px;
  margin: 0 4px 0 0;
  position: relative;
  display: flex;
  align-items: center;  
`;

const LogoText = styled.span`
  padding-left: 8px;
  padding-right: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
`;

const Navbar = styled.div`
  height: 40px;
  background-color: #E1E1E1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Header;
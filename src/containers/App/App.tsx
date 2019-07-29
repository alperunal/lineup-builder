import React from "react";
import styled from "styled-components";

import Header from "../../components/Header/Header";
import Container from "../../components/UI/Container/Container";
import Tactic from "../Tactic/Tactic";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Tactic />
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #4bbf6b;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
`;

export default App;

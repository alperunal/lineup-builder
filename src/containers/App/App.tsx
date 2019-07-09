import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Field from '../../components/Field/Field';
import Container from '../../components/UI/Container/Container';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Field width={570} height={710} />
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #4BBF6B;
`

const Content = styled.div`
  background-color: rgba(0,0,0,.12);    
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
`

export default App;
import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {

  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
`;

export default Container;
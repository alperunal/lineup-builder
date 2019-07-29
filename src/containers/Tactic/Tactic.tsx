import React, { useState } from "react";
import styled from "styled-components";

import Field from "../../components/Field/Field";
import Squad from "../../components/Squad/Squad";

const Tactic = () => {
  const [formation, setFormation] = useState("4-4-2");

  const createFormation = () => {
    //
  };

  return (
    <Wrapper>
      <Field width={570} height={710} formation={formation} />
      <Squad formation={formation} setFormation={setFormation} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Tactic;

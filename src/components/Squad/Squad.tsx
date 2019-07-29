import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  formation: string;
  setFormation: (formation: string) => void;
}

const Squad = ({ formation, setFormation }: IProps) => {
  return (
    <Wrapper>
      <div>
        <Select
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setFormation(event.target.value)
          }
          value={formation}
        >
          <option value="4-4-2">4-4-2</option>
          <option value="4-2-3-1">4-2-3-1</option>
          <option value="4-3-3">4-3-3</option>
          <option value="3-5-2">3-5-2</option>
        </Select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  box-sizing: border-box;
  padding: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding-left: 10px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 20px;
`;

export default Squad;

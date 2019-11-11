import styled from "styled-components";

export const TacticField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Options = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  display: block;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;
  margin-top: 20px;

  @media(min-width: 768px) {
    margin-top: 0;
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ColorOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  padding-left: 5px;
  color: #fff;
  margin-bottom: 5px;
  text-shadow: 2px 2px #000;
`;

export const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: "Roboto";
  font-size: 20px;
  box-sizing: border-box;
  margin-bottom: 5px;

  &::placeholder {
    color: #ddd;
  }
`;

export const FormField = styled.div`
  margin-top: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

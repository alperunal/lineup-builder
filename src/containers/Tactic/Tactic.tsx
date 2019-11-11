import React, { useState } from "react";
import styled from "styled-components";

import ColorPicker from "../../components/UI/ColorPicker/ColorPicker";
import Field from "../../components/Field/Field";
import Squad from "../../components/Squad/Squad";
import exampleformation from "../../assets/data/example.json";
import { IPosition } from "../../constants/model";

const Tactic = () => {
  // const [formation, setFormation] = useState(exampleformation);
  const [name, setName] = useState("Default");
  const [mainColor, setMainColor] = useState("#a32638");
  const [secondaryColor, setSecondaryColor] = useState("#fcb514");
  const [numberColor, setNumberColor] = useState("#ffffff");
  const [players, setPlayers] = useState([
    {
      id: "1",
      num: 1,
      name: "Taffarel",
      position: {
        x: 50,
        y: 90,
      },
    },
    {
      id: "2",
      num: 57,
      name: "Hakan",
      position: {
        x: 15,
        y: 70,
      },
    },
    {
      id: "3",
      num: 3,
      name: "Bulent",
      position: {
        x: 40,
        y: 70,
      },
    },
    {
      id: "4",
      num: 4,
      name: "Popescu",
      position: {
        x: 60,
        y: 70,
      },
    },
    {
      id: "5",
      num: 35,
      name: "Capone",
      position: {
        x: 85,
        y: 70,
      },
    },
    {
      id: "6",
      num: 11,
      name: "Hasan",
      position: {
        x: 10,
        y: 30,
      },
    },
    {
      id: "7",
      num: 5,
      name: "Emre",
      position: {
        x: 35,
        y: 50,
      },
    },
    {
      id: "8",
      num: 7,
      name: "Okan",
      position: {
        x: 65,
        y: 50,
      },
    },
    {
      id: "9",
      num: 22,
      name: "Umit",
      position: {
        x: 90,
        y: 30,
      },
    },
    {
      id: "10",
      num: 10,
      name: "Hagi",
      position: {
        x: 50,
        y: 25,
      },
    },
    {
      id: "11",
      num: 9,
      name: "Jardel",
      position: {
        x: 50,
        y: 10,
      },
    },
  ]);

  const editPlayer = (id: string, nName: string, nNum: number, nPosition: IPosition) => {
    setPlayers(
      players.map(player => {
        if (player.id === id) {
          return {
            name: nName,
            num: nNum,
            id,
            position: nPosition,
          };
        } else {
          return player;
        }
      }),
    );
  };

  return (
    <div>
      <TacticField>
        <Field
          width={580}
          height={710}
          players={players}
          mainColor={mainColor}
          secondaryColor={secondaryColor}
          numberColor={numberColor}
        />
        <Options>
          <FormField>
            <Label htmlFor="tacticName">Tactic Name</Label>
            <Input
              id="tacticName"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </FormField>
          <ColorOptions>
            <ColorOption>
              <Label>Primary</Label>
              <ColorPicker color={mainColor} setColor={setMainColor} />
            </ColorOption>
            <ColorOption>
              <Label>Secondary</Label>
              <ColorPicker
                color={secondaryColor}
                setColor={setSecondaryColor}
              />
            </ColorOption>
            <ColorOption>
              <Label>Number</Label>
              <ColorPicker color={numberColor} setColor={setNumberColor} />
            </ColorOption>
          </ColorOptions>
          <Squad players={players} editPlayer={editPlayer} />
        </Options>
      </TacticField>
    </div>
  );
};

const TacticField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Options = styled.div`
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

const ColorOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ColorOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  padding-left: 5px;
  color: #fff;
  margin-bottom: 5px;
  text-shadow: 2px 2px #000;
`;

const Input = styled.input`
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

const FormField = styled.div`
  margin-top: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default Tactic;

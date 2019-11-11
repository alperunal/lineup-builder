import React, { useState } from "react";

import ColorPicker from "../../components/UI/ColorPicker/ColorPicker";
import Field from "../../components/Field/Field";
import Squad from "../../components/Squad/Squad";
import exampleformation from "../../assets/data/example.json";
import { IPosition } from "../../constants/model";
import { TacticField, Options, FormField, Label, Input, ColorOptions, ColorOption} from './style';

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

export default Tactic;

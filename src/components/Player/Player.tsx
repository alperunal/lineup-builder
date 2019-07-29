import React from "react";

interface IProps {
  name: string;
  picture: string;
}

const Player = ({ name, picture }: IProps) => {
  return (
    <div>
      <img src={picture} />
      <span>{name}</span>
    </div>
  );
};

export default Player;

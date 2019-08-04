export interface IFormation {
  id: string;
  name: string;
  mainColor: string;
  secondaryColor: string;
  numberColor?: string;
  players: IPlayer[];
}

export interface IPlayer {
  id: string;
  num: number;
  name: string;
  position: IPosition;
}

export interface IPosition {
  x: number;
  y: number;
}

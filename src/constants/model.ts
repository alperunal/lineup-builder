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
    num: string;
    name: string;
    goal?: boolean;
    yellowCard?: boolean;
    yellowToRed?: boolean;
    redCard?: boolean;
    position: IPosition;
}

export interface IPosition {
    x: number;
    y: number;
}

interface IColors {
    mainColor: string;
    secondaryColor: string;
    numberColor: string;
}

export interface ITactic {
    name: string;
    date: Date;
    colors: IColors;
    players: IPlayer[];
}

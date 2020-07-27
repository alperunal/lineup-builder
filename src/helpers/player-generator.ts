/* eslint-disable no-multi-spaces */
import { IPlayer, IPosition } from '../constants/model';

const generateName = (function () {
    const initialNames = [
        'Green',
        'Smith',
        'Johnson',
        'Williams',
        'Brown',
        'Jones',
        'Miller',
        'Davis',
        'Martinez',
        'Rodriguez',
        'Garcia',
        'Perez',
        'Yilmaz',
        'Lee',
        'Hansen',
        'Ivanov',
        'Andersson',
        'De Jong',
        'Martin',
        'Muller',
        'Rossi',
        'Silva',
        'Jovanovic',
        'Papadopoulos',
        'Hernandez',
        'Gonzalez',
        'Da Silva',
        'Ali',
        'Traore',
        'Ndiaye',
        'Gomes',
        'Kamara',
        'Diarra',
        'Kim',
        'Khan',
        'Sato',
        'Wang',
    ];
    let names = [...initialNames];

    const generator = function (): string {
        const index = Math.floor(Math.random() * names.length);
        return `${names.splice(index, 1)}`;
    };
    generator.reset = function () {
        names = [...initialNames];
    };
    return generator;
}());

const generateNumber = (function () {
    const initialNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let numbers = [...initialNumbers];
    const generator = function (): string {
        const index = Math.floor(Math.random() * numbers.length);
        return `${numbers.splice(index, 1)}`;
    };
    generator.reset = function () {
        numbers = [...initialNumbers];
    };
    return generator;
}());

export function getFormation(formation: string): IPosition[] {
    switch (formation) {
    case '4-2-3-1':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 },  // DL
            { x: 295, y: 190 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 190 },  // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 },  // ST
        ];
    case '4-4-2':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 },  // DL
            { x: 295, y: 230 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 230 },  // ML
            { x: 200, y: 60 },  // ST
            { x: 120, y: 60 },  // ST
        ];
    case '4-4-1-1':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 },  // DL
            { x: 295, y: 230 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 230 },  // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 },  // ST
        ];
    case '4-3-3':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 },  // DL
            { x: 160, y: 270 }, // DMC
            { x: 210, y: 200 }, // MCR
            { x: 105, y: 200 }, // MCL
            { x: 295, y: 100 }, // RW
            { x: 25, y: 100 },  // LW
            { x: 160, y: 60 },  // ST
        ];
    case '3-5-2':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 300 }, // WBR
            { x: 220, y: 365 }, // DCR
            { x: 160, y: 365 }, // DC
            { x: 100, y: 365 }, // DCL
            { x: 45, y: 300 },  // WBL
            { x: 230, y: 210 }, // MCR
            { x: 160, y: 210 }, // MC
            { x: 90, y: 210 },  // MCL
            { x: 120, y: 60 },  // STL
            { x: 200, y: 60 },  // STR
        ];
    default:
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 },  // DL
            { x: 295, y: 190 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 190 },  // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 },  // ST
        ];
    }
}

export function generatePlayers(): IPlayer[] {
    const positions = getFormation('4-2-3-1');
    const players: IPlayer[] = [];
    generateName.reset();
    generateNumber.reset();
    for (let i = 0; i < 11; i += 1) {
        const player: IPlayer = {
            id: `${i}`,
            name: generateName(),
            num: i === 0 ? '1' : generateNumber(),
            position: positions.shift() || { x: 0, y: 0 },
        };
        players.push(player);
    }
    return players;
}

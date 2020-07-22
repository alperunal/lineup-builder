/* eslint-disable no-multi-spaces */
import Faker from 'faker';
import { IPlayer } from '../constants/model';

export function generate(type: string): string {
    switch (type) {
    case 'name':
        return `${Faker.name.lastName()}`;
    case 'team':
        return `${Faker.company.companySuffix()}`;
    case 'number':
        return Faker.random
            .number({
                min: 2,
                max: 25,
            })
            .toString();
    default:
        return Faker.random.number(99).toString();
    }
}

export function getFormation(formation: string) {
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
    for (let i = 0; i < 11; i += 1) {
        const player: IPlayer = {
            id: Faker.random.alphaNumeric(5),
            name: generate('name'),
            num: i === 0 ? '1' : generate('number'),
            position: positions.shift() || { x: 0, y: 0 },
        };
        players.push(player);
    }
    return players;
}

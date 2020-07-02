import Faker from 'faker';
import { IPlayer } from "../constants/model";

function generate(type: string): string {
    switch (type) {
        case 'name':
            return `${Faker.name.lastName()}`;
        case 'team':
            return `${Faker.company.companySuffix()}`;
        case 'number':
            return Faker.random.number({
                min: 1,
                max: 25,
            }).toString();
        default:
            return Faker.random.number(99).toString();
    }
}

export function generateData(): IPlayer[] {
    const positions = [
        {
            x: 160,
            y: 435,
        },
        {
            x: 275,
            y: 350,
        },
        {
            x: 200,
            y: 365,
        },
        {
            x: 120,
            y: 365,
        },
        {
            x: 45,
            y: 350,
        },
        {
            x: 295,
            y: 230,
        },
        {
            x: 210,
            y: 250,
        },
        {
            x: 105,
            y: 250,
        },
        {
            x: 25,
            y: 230,
        },
        {
            x: 160,
            y: 140,
        },
        {
            x: 160,
            y: 60,
        }
    ];
    const players: IPlayer[] = [];
    for(let i=0; i<11; i++) {
        const player: IPlayer = {
            id: Faker.random.alphaNumeric(5),
            name: generate('name'),
            num: generate('number'),
            position: positions.pop(),
        };
        players.push(player);
    }
    return players;
}

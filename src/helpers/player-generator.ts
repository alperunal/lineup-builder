import Faker from 'faker';
import { IPlayer } from "../constants/model";

export function generate(type): string {
    switch (type) {
        case 'name':
            return `${Faker.name.lastName()} ${Faker.name.firstName().slice(0, 1)}`;
        case 'team':
            return `${Faker.company.companySuffix()}`;
        case 'number':
            return Faker.random.number(99).toString();
        default:
            return Faker.random.number(99).toString();
    }
}

export function generateData(): IPlayer[] {
    const positions = [
        {
            x: 175,
            y: 450,
        },
        {
            x: 290,
            y: 380,
        },
        {
            x: 215,
            y: 380,
        },
        {
            x: 135,
            y: 380,
        },
        {
            x: 60,
            y: 380,
        },
        {
            x: 310,
            y: 230,
        },
        {
            x: 225,
            y: 250,
        },
        {
            x: 120,
            y: 250,
        },
        {
            x: 40,
            y: 230,
        },
        {
            x: 175,
            y: 150,
        },
        {
            x: 175,
            y: 70,
        }
    ];
    const players: IPlayer[] = [];
    for(let i=0; i<11; i++) {
        const player: IPlayer = {
            id: Faker.random.alphaNumeric(5),
            name: generate('name'),
            num: parseInt(generate('number'), 10),
            position: positions.pop(),
        };
        players.push(player);
    }
    return players;
}

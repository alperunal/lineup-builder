import dotenv from 'dotenv';

dotenv.config();

export const ground = {
    height: 500,
    width: 350,
};

export const lineupUrl = 'https://www.voety.net/lineup';

export const api = ((): string => {
    if (process.env.ENV === 'dev') {
        return 'http://localhost:9000/.netlify/functions';
    }
    return 'https://voety.net/.netlify/functions';
})();

export const formations = [
    '4-2-3-1',
    '4-4-2',
    '4-4-1-1',
    '4-3-3',
    '3-5-2',
];

import dotenv from 'dotenv';

dotenv.config();

export const ground = {
    height: 500,
    width: 350,
};

export const lineupUrl = 'https://www.voety.net/#/lineup';

export const api = (() => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:8000/v1';
    }
    return 'https://voety.net/api/v1';
})();

export const formations = [
    '4-2-3-1',
    '4-4-2',
    '4-4-1-1',
    '4-3-3',
    '3-5-2',
];

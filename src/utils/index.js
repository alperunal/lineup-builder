import html2canvas from 'html2canvas';
import axios from 'axios';
import { API, LINEUP_URL } from 'constants';

function getPlayerPositions() {
    const players = document.getElementsByClassName('player');
    const positions = [];

    for (let i = 0; i < players.length; i += 1) {
        try {
            const player = players[i];
            const styleStr = player.style.transform;
            const position = styleStr.split('(')[1].split(')')[0].split(',');
            positions.push({
                x: parseInt(position[0], 10),
                y: parseInt(position[1], 10),
            });
        } catch (error) {
            console.log(error);
        }
    }
    return positions;
}

export function capture(element) {
    window.scrollTo(0, 0);
    const vp = document.getElementById('viewportMeta')?.getAttribute('content');
    document.getElementById('viewportMeta')?.setAttribute('content', 'width=800');
    return html2canvas(element).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'tactic.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).then(() => {
        document.getElementById('viewportMeta')?.setAttribute('content', vp || 'width=device-width, initial-scale=1.0');
    });
}

function encodeData(name = 'default', mainColor, secondaryColor, numberColor, players) {
    const positions = getPlayerPositions();

    const data = {
        name,
        date: new Date(),
        main_color: mainColor,
        secondary_color: secondaryColor,
        number_color: numberColor,
        players: players.map((player, index) => {
            const playerElement = player;
            playerElement.position = positions[index];
            return playerElement;
        }),
        user_id: '0',
    };

    const encodedData = btoa(JSON.stringify(data));
    return encodedData;
}

export function save(name = 'default', mainColor, secondaryColor, numberColor, players) {
    const encodedData = encodeData(name, mainColor, secondaryColor, numberColor, players);
    const link = document.createElement('a');
    link.download = `voety_${name}.tac`;
    link.href = `data:text/plain;charset=utf-8,${encodedData}`;
    link.click();
}

export function load(
    setName,
    setMainColor,
    setSecondaryColor,
    setNumberColor,
    setPlayers,
) {
    const input = document.createElement('input');
    input.onchange = () => {
        try {
            if (input?.files?.length) {
                const file = input.files[0];
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader?.result) {
                        const data = JSON.parse(atob(reader.result.toString()));
                        setName(data.name);
                        setMainColor(data.main_color);
                        setSecondaryColor(data.secondary_color);
                        setNumberColor(data.number_color);
                        setPlayers(data.players);
                    }
                };

                reader.readAsText(file);
            }
        } catch (e) {
            console.log(e);
        }
    };
    input.type = 'file';
    input.click();
}

export async function share(
    name = 'default',
    mainColor,
    secondaryColor,
    numberColor,
    players,
    setSpinner,
) {
    setSpinner(true);
    try {
        const positions = getPlayerPositions();
        const res = await axios.post(`${API}/lineups`, {
            name,
            date: `${new Date()}`,
            main_color: mainColor,
            secondary_color: secondaryColor,
            number_color: numberColor,
            players: JSON.stringify(players.map((player, index) => {
                const playerElement = player;
                playerElement.position = positions[index];
                return playerElement;
            })),
            user_id: '0',
            version: '2',
        });
        setSpinner(false);
        if (res.status === 201) {
            return `${LINEUP_URL}/${res.data?.id}`;
        }
        return 'error';
    } catch (e) {
        console.log(e);
        setSpinner(false);
        return 'error';
    }
}

export async function loadSharedLineup(
    id,
    setName,
    setMainColor,
    setSecondaryColor,
    setNumberColor,
    setPlayers,
    setSpinner,
) {
    setSpinner(true);
    try {
        const res = await axios.get(`${API}/lineups/${id}`);
        setName(res.data.name);
        setMainColor(res.data.main_color);
        setSecondaryColor(res.data.secondary_color);
        setNumberColor(res.data.number_color);
        setPlayers(JSON.parse(res.data.players));
        setSpinner(false);
    } catch (e) {
        console.log(e);
        setSpinner(false);
    }
}

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

    const generator = function () {
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
    const generator = function () {
        const index = Math.floor(Math.random() * numbers.length);
        return `${numbers.splice(index, 1)}`;
    };
    generator.reset = function () {
        numbers = [...initialNumbers];
    };
    return generator;
}());

export function getFormation(formation) {
    switch (formation) {
    case '4-2-3-1':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 }, // DL
            { x: 295, y: 190 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 190 }, // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 }, // ST
        ];
    case '4-4-2':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 }, // DL
            { x: 295, y: 230 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 230 }, // ML
            { x: 200, y: 60 }, // ST
            { x: 120, y: 60 }, // ST
        ];
    case '4-4-1-1':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 }, // DL
            { x: 295, y: 230 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 230 }, // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 }, // ST
        ];
    case '4-3-3':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 }, // DL
            { x: 160, y: 270 }, // DMC
            { x: 210, y: 200 }, // MCR
            { x: 105, y: 200 }, // MCL
            { x: 295, y: 100 }, // RW
            { x: 25, y: 100 }, // LW
            { x: 160, y: 60 }, // ST
        ];
    case '3-5-2':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 300 }, // WBR
            { x: 220, y: 365 }, // DCR
            { x: 160, y: 365 }, // DC
            { x: 100, y: 365 }, // DCL
            { x: 45, y: 300 }, // WBL
            { x: 230, y: 210 }, // MCR
            { x: 160, y: 210 }, // MC
            { x: 90, y: 210 }, // MCL
            { x: 120, y: 60 }, // STL
            { x: 200, y: 60 }, // STR
        ];
    default:
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 350 }, // DR
            { x: 200, y: 365 }, // DCR
            { x: 120, y: 365 }, // DCL
            { x: 45, y: 350 }, // DL
            { x: 295, y: 190 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 190 }, // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 }, // ST
        ];
    }
}

export function generatePlayers() {
    const positions = getFormation('4-2-3-1');
    const players = [];
    generateName.reset();
    generateNumber.reset();
    for (let i = 0; i < 11; i += 1) {
        const player = {
            id: `${i}`,
            name: generateName(),
            num: i === 0 ? '1' : generateNumber(),
            position: positions.shift() || { x: 0, y: 0 },
        };
        players.push(player);
    }
    return players;
}

import html2canvas from 'html2canvas';
import { IPlayer, ITactic } from '../constants/model';

function getPlayerPositions() {
    const players = document.getElementsByClassName('player');
    const positions = [];

    for (let i=0; i<players.length; i++) {
        try {
            const player = players[i] as HTMLElement;
            const styleStr = player.style.transform;
            const position = styleStr.split('(')[1].split(')')[0].split(',');
            positions.push({
                x: parseInt(position[0], 10),
                y: parseInt(position[1], 10),
            });
        } catch(error) {
            console.log(error);
        }
    }
    return positions;
}

export function capture(element: HTMLElement) {
    return html2canvas(element).then((canvas: HTMLCanvasElement) => {
        const link = document.createElement('a');
        link.download = 'tactic.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

export function save(name: string = 'default', mainColor: string, secondaryColor: string, numberColor: string, players: IPlayer[]) {
    const positions = getPlayerPositions();

    const data: ITactic = {
        name,
        date: new Date(),
        colors: {
            mainColor,
            secondaryColor,
            numberColor,
        },
        players: players.map((player, index) => {
            player.position = positions[index];
            return player;
        })
    };

    const encodedData = btoa(JSON.stringify(data));

    const link = document.createElement('a');
    link.download = `voet_${name}.tac`;
    link.href = `data:text/plain;charset=utf-8,${encodedData}`;
    link.click();
}

export function load
    (
        setName: (name: string) => void,
        setMainColor: (color: string) => void,
        setSecondaryColor: (color: string) => void,
        setNumberColor: (color: string) => void,
        setPlayers: (players: IPlayer[]) => void
    ) {
    const input = document.createElement('input');
    input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (() => {
            const data = JSON.parse(atob(reader.result.toString()));
            setName(data.name);
            setMainColor(data.colors.mainColor);
            setSecondaryColor(data.colors.secondaryColor);
            setNumberColor(data.colors.numberColor);
            setPlayers(data.players);
        });

        reader.readAsText(file);
    }
    input.type = 'file';
    input.click();
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import html2canvas from 'html2canvas';
import { IPlayer, ITactic, IPosition } from '../constants/model';

function getPlayerPositions(): IPosition[] {
    const players = document.getElementsByClassName('player');
    const positions = [];

    for (let i = 0; i < players.length; i += 1) {
        try {
            const player = players[i] as HTMLElement;
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

export function capture(element: HTMLElement): Promise<void | HTMLCanvasElement> {
    const vp = document.getElementById('viewportMeta')?.getAttribute('content');
    document.getElementById('viewportMeta')?.setAttribute('content', 'width=800');
    return html2canvas(element).then((canvas: HTMLCanvasElement) => {
        const link = document.createElement('a');
        link.download = 'tactic.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).then(() => {
        document.getElementById('viewportMeta')?.setAttribute('content', vp || 'width=device-width, initial-scale=1.0');
    });
}

export function save(name = 'default', mainColor: string, secondaryColor: string, numberColor: string, players: IPlayer[]): void {
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
        }),
    };

    const encodedData = btoa(JSON.stringify(data));

    const link = document.createElement('a');
    link.download = `voety_${name}.tac`;
    link.href = `data:text/plain;charset=utf-8,${encodedData}`;
    link.click();
}

export function load(
    setName: (name: string) => void,
    setMainColor: (color: string) => void,
    setSecondaryColor: (color: string) => void,
    setNumberColor: (color: string) => void,
    setPlayers: (players: IPlayer[]) => void,
): void {
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
                        setMainColor(data.colors.mainColor);
                        setSecondaryColor(data.colors.secondaryColor);
                        setNumberColor(data.colors.numberColor);
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

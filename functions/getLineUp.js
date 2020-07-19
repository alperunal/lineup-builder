/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker');

function getFormation(formation) {
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
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 },  // ST
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
            { x: 295, y: 190 }, // RM
            { x: 210, y: 250 }, // MCR
            { x: 105, y: 250 }, // MCL
            { x: 25, y: 190 },  // ML
            { x: 160, y: 140 }, // AMC
            { x: 160, y: 60 },  // ST
        ];
    case '3-5-2':
        return [
            { x: 160, y: 435 }, // GK
            { x: 275, y: 260 }, // WBR
            { x: 220, y: 365 }, // DCR
            { x: 160, y: 365 }, // DC
            { x: 100, y: 365 }, // DCL
            { x: 45, y: 260 },  // WBL
            { x: 210, y: 250 }, // MCR
            { x: 25, y: 190 },  // ML
            { x: 105, y: 250 }, // MCL
            { x: 120, y: 60 }, // STL
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

function generate(type) {
    switch (type) {
    case 'name':
        return `${faker.name.lastName()}`;
    case 'team':
        return `${faker.company.companySuffix()}`;
    case 'number':
        return faker.random
            .number({
                min: 2,
                max: 25,
            })
            .toString();
    default:
        return faker.random.number(99).toString();
    }
}

function generateData() {
    const positions = getFormation('4-2-3-1');
    const players = [];
    for (let i = 0; i < 11; i += 1) {
        const player = {
            id: faker.random.alphaNumeric(5),
            name: generate('name'),
            num: i === 10 ? '1' : generate('number'),
            position: positions.pop() || { x: 0, y: 0 },
        };
        players.push(player);
    }
    return players;
}

exports.handler = async function getLineUp(event) {
    const teamCode = event.queryStringParameters.code;

    let lineUp;
    if (teamCode) {
        console.log(teamCode);
    } else {
        lineUp = generateData();
    }

    return ({
        statusCode: 200,
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers':
        //     'Origin, X-Requested-With, Content-Type, Accept',
        // },
        body: JSON.stringify(lineUp),
    });
};

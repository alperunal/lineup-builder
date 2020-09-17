/* eslint-disable */
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;
const mongoose = require('mongoose');
const address = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/voety?retryWrites=true&w=majority`;
const LineUp = require('./lineup');
let headers = {
    'Access-Control-Allow-Origin': 'https://www.voety.net',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Credentials': 'true',
};
if(process.env.NODE_ENV) {
    headers['Access-Control-Allow-Origin'] = '*';
}

exports.handler = async function loadTactic(event, context) {
    try {
        await mongoose.connect(address, { useUnifiedTopology: true, useNewUrlParser: true });
        const id = event.queryStringParameters?.id;
        if(id) {
            const data = await LineUp.findById(id);
            return ({
                statusCode: 200,
                headers,
                body: JSON.stringify({ type: 'success', data }),
            });
        }
    } catch(err) {
        console.log(err);
        return ({
            statusCode: 200,
            headers,
            body: JSON.stringify({ type: 'error', details: err }),
        });
    }
};

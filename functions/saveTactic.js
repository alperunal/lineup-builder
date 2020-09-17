/* eslint-disable */
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;
const mongoose = require('mongoose');
const querystring = require('querystring');
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

exports.handler = async function saveTactic(event, context) {
    console.log(event.httpMethod);
    if (event.httpMethod === 'POST') {
        // Only allow POST
        try {
            await mongoose.connect(address, { useUnifiedTopology: true, useNewUrlParser: true });
            const params = JSON.parse(event.body);
            console.log('params', params);
            const dataStr = params.data;
            console.log('datastr', dataStr);
            if(dataStr) {
                const decodedData = JSON.parse(Buffer.from(dataStr, 'base64').toString());
                console.log('decoded', decodedData);
                const data = new LineUp(decodedData);
                const result = await data.save();
                return ({
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({type: 'success', id: result._id}),
                });
            }
        } catch(err) {
            console.log(err);
            return ({
                statusCode: 200,
                headers,
                body: JSON.stringify({type: 'error', details: err}),
            });
        }
    } else {
        return ({
            statusCode: 200,
            headers,
            body: 'Method Not Allowed',
        });
    }
};

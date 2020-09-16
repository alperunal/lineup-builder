/* eslint-disable */
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;
const mongoose = require('mongoose');
const querystring = require('querystring');
const address = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/voety?retryWrites=true&w=majority`;
const LineUp = require('./lineup');

exports.handler = async function saveTactic(event, context) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return ({
            statusCode: 405,
            body: 'Method Not Allowed',
        });
    }
    try {
        await mongoose.connect(address, { useUnifiedTopology: true, useNewUrlParser: true });
        const params = querystring.parse(event.body);
        const dataStr = params.data;
        if(dataStr) {
            const decodedData = JSON.parse(Buffer.from(dataStr, 'base64').toString());
            const data = new LineUp(decodedData);
            const result = await data.save();
            return ({
                statusCode: 200,
                body: JSON.stringify({type: 'success', id: result._id}),
            });
        }
    } catch(err) {
        console.log(err);
        return ({
            statusCode: 200,
            body: JSON.stringify({type: 'error', details: err}),
        });
    }
};

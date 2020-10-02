import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import App from '../src/containers/App/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('*', (req, res) => {
    const context = {};
    const appStr = ReactDOMServer.renderToString(
        <Router location={req.url} context={context}>
            <App />
        </Router>,
    );

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(data.replace('<div id="root"></div>', `<div id="root">${appStr}</div>`));
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

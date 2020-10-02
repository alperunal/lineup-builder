import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App/App';
import './styles/style.scss';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(
        <Router>
            <App />
        </Router>,
        rootElement,
    );
} else {
    render(
        <Router>
            <App />
        </Router>,
        rootElement,
    );
}

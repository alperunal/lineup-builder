import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { IntlProvider } from 'react-intl';
import messagesEN from 'languages/en.json';
import App from './containers/App/App';
import './styles.scss';

const messages = {
    en: messagesEN,
};
const language = 'en';
const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
    hydrate(
        <IntlProvider
            locale={language}
            messages={messages[language]}
        >
            <App />
        </IntlProvider>,
        rootElement,
    );
} else {
    render(
        <IntlProvider
            locale={language}
            messages={messages[language]}
        >
            <App />
        </IntlProvider>,
        rootElement,
    );
}

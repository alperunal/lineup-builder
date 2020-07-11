import * as React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import './styles.scss';

const rootElement = document.getElementById('root');
render(<App />, rootElement);

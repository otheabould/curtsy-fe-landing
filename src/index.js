import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';

console.log({ NODE_ENV: process.env.NODE_ENV });
if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-183039011-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();

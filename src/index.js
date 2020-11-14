import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('G-CKR0XXQ90W');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();

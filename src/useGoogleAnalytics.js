import { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function useGoogleAnalytics() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') return;

        ReactGA.initialize('UA-183039011-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const sendEvent = payload => {
        if (process.env.NODE_ENV !== 'production') return;

        ReactGA.event(payload);
    };

    return [sendEvent];
}

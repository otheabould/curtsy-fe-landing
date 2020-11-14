import { useState } from 'react';
import ReactGA from 'react-ga';

import './app.scss';

import { API_URL } from './config';
import Header from './Header';
import TextInput from './TextInput';

function App() {
    const [email, setEmail] = useState();
    const [showSuccess, setShowSuccess] = useState(false);
    const [posting, setPosting] = useState(false);

    if (showSuccess)
        return (
            <div className="app">
                <Header />
                <div className="content">
                    <h1>All-in-one booking system</h1>
                    <h2 className="purple">
                        One tool for your whole team. Book, plan, and get organized.
                    </h2>
                    <h3 className="gray">
                        Thanks! We'll be in touch. <span class="emojis">🥳🤘👯‍♀️</span>
                    </h3>
                </div>
            </div>
        );

    return (
        <div className="app">
            <Header />
            <div className="content">
                <h1>All-in-one booking system</h1>
                <h2 className="purple">
                    One tool for your whole team. Book, plan, and get organized.
                </h2>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        placeholder="Enter your email..."
                        alwaysShowButton
                        type="email"
                        value={email}
                        loading={posting}
                        onChange={(_, val) => {
                            setEmail(val);
                        }}
                    />
                </form>
                <h3 className="gray">
                    It's going to be amazing! Sign up to find out when it's ready.
                </h3>
            </div>
        </div>
    );

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateEmail(email)) return;

        try {
            setPosting(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            };
            const response = await fetch(`${API_URL}/email`, requestOptions);
            await response.json();

            setShowSuccess(true);

            if (process.env.NODE_ENV === 'production') {
                ReactGA.event({
                    category: 'Emails',
                    action: 'Sign up to waiting list',
                    value: email,
                });
            }
        } catch {
            setPosting(false);
        }
    }
}

function validateEmail(email) {
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email);
}

export default App;

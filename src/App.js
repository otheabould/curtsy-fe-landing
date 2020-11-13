import { useState } from 'react';
import './app.scss';

const { default: Header } = require('./Header');
const { default: TextInput } = require('./TextInput');

function App() {
    const [email, setEmail] = useState();
    return (
        <div className="app">
            <Header />
            <div className="content">
                <h1>All-in-one booking system</h1>
                <h2 className="purple">
                    One tool for your whole team. Book, plan, and get organized.
                </h2>
                <form>
                    <TextInput
                        placeholder="Enter your email..."
                        alwaysShowButton
                        type="email"
                        value={email}
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
}

export default App;

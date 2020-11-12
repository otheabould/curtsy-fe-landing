import { useState } from 'react';
import './app.scss';

const { default: Header } = require('./Header');
const { default: TextInput } = require('./TextInput');

function App() {
    const [email, setEmail] = useState();
    return (
        <div className="App">
            <Header />
            <div className="content">
                <h1>All-in-one booking system</h1>
                <h2>One tool for your whole team. Book, plan, and get organized.</h2>
                <form>
                    <TextInput
                        placeholder="Enter your email..."
                        type="email"
                        value={email}
                        onChange={(_, val) => {
                            setEmail(val);
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default App;

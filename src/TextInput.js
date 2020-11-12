import React, { useState } from 'react';

import './input.scss';

function TextInput({ name, value, onChange, placeholder = '', type = 'text', required }) {
    const [err, setError] = useState(validate(value));
    const [showErr, setShowError] = useState(false);

    return (
        <div className="input">
            <div className="input-container">
                <input
                    type="email"
                    className="input-field"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                />
                <div className="input-field-shadow"></div>
            </div>
            <div className="submit-container" style={{ opacity: value ? 1 : 0 }}>
                <input type="submit" className="submit-btn" />
                <div className="submit-btn-shadow"></div>
            </div>
        </div>
    );

    function handleBlur() {
        setShowError(true);
    }

    function handleChange(e) {
        e.preventDefault();

        setError(validate(e.target.value));
        onChange(name, e.target.value);
    }

    function validate(val) {
        let error = '';

        if (required && !val) {
            error = 'This is a required field.';
        } else if (type === 'email' && !validateEmail(val)) {
            error = 'Please provide a valid email.';
        }

        return error;
    }
}

function validateEmail(val) {
    // eslint-disable-next-line
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(val);
}

export default TextInput;

import React from 'react';

import './input.scss';
import LoadingIcon from './LoadingIcon';

function TextInput({
    name,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    buttonText = 'submit',
    loading = false,
}) {
    const buttonStyles = value ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' };
    return (
        <div className="input">
            <div className="input-container">
                <input
                    type={type}
                    className="input-field"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <div className="input-field-shadow"></div>
            </div>
            <div className="submit-container" style={buttonStyles}>
                <button type="submit" className="submit-btn">
                    {loading ? <LoadingIcon /> : buttonText}
                </button>
                <div className="submit-btn-shadow"></div>
            </div>
        </div>
    );

    function handleChange(e) {
        e.preventDefault();

        onChange(name, e.target.value);
    }
}

export default TextInput;

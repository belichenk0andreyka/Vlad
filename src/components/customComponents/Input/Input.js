import React from 'react';

import './input.css';

const Input = ({ onChange, isError, error, type, name, ref, value, placeholder, fieldName }) => {
    const changeInputValue = event => onChange(event, name);
    return (
        <div className='input'>
            <div className='input__block'>
                <div className='input__block_name'><span>{fieldName || name}:</span></div>
                <div className='input__block_element'>
                    <input
                        ref={ref}
                        type={type}
                        value={value}
                        onChange={changeInputValue}
                        placeholder={placeholder}
                    />
                </div>
            </div>
            <div className='input__error'>
                {isError && <span>{error}</span>}
            </div>
        </div>
    );
};

export default Input;
import React from 'react';

const Input = (props) => {
    const {type, value, placeholder, onKeyPress, onInputChange} = props;

    return (
        <React.Fragment>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onKeyPress={(e) => onKeyPress(e)}
                onChange={(e) => onInputChange(e)}
            />
        </React.Fragment>
    );
};

export default Input;

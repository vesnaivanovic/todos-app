import React from 'react';

const Input = (props) => {
    const {id, value, placeholder, checked, onChange} = props;

    return (
        <React.Fragment>
            <input
                id={id}
                type="checkbox"
                value={value}
                checked={checked}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
            />
        </React.Fragment>
    );
};

export default Input;

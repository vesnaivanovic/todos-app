import React from 'react';

const Button = (props) => {
    const {children, type, classes, onClick} = props;

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

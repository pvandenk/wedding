import React from 'react';

const Button = (props) => {
    return (
        <button
            className={"c-button"}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export default Button;

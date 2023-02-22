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
            <div className="c-button__horizontal"></div>
            <div className="c-button__vertical"></div>
        </button>
    );
};

export default Button;

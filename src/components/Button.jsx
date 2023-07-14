import React from 'react';
import "../sass/components/button.scss";

const Button = (props) => {
    return (
        <button
            className={`c-button ${props.loading ? "is-loading" : ""}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.loading ?
                <div className="lds-heart">
                    <div></div>
                </div> : null
            }

            <span className="c-button__text">{props.label}</span>

            <div className="c-button__horizontal"></div>
            <div className="c-button__vertical"></div>
        </button>
    );
};

export default Button;

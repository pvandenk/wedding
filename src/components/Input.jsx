import React from 'react';
import "../sass/components/input.scss";

const Input = (props) => {
    return (
        <div className={`c-input ${props.classes}`}>
            {props.label ?
                <label htmlFor={props.id}>
                    {props.label}
                </label> : null
            }
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required ? props.required : true}
                autoComplete={"off"}
            />
        </div>
    );
};

export default Input;

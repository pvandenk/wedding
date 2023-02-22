import React from 'react';

const Input = (props) => {
    return (
        <div className={"c-input"}>
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
            />
        </div>
    );
};

export default Input;

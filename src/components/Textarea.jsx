import React from 'react';
import "../sass/components/textarea.scss";

const Textarea = (props) => {
    return (
        <div className={`c-textarea ${props.classes}`}>
            {props.label ?
                <label htmlFor={props.id}>
                    {props.label}
                </label> : null
            }
            <textarea
                id={props.id}
                value={props.value}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required ? props.required : false}
                autoComplete={"off"}
            />
        </div>
    );
};

export default Textarea;

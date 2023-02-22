import React from 'react';

const Select = (props) => {
    return (
        <div className={"c-select"}>
            {props.label ?
                <label>
                    {props.label}
                </label> : null
            }
            <select id={props.id} onChange={props.onChange}>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

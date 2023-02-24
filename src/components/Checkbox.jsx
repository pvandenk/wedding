import React from 'react';
import "../sass/components/checkbox.scss";

function Checkbox(props) {
    function handleChange() {
        if (props.onChange) {
            props.onChange()
        }
    }

    return (
        <div className={"c-checkbox"}>
            <input id={props.id} type="checkbox" checked={props.checked} onChange={handleChange}/>
            <label htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}

export default Checkbox;

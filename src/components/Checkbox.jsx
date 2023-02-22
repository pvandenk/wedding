import React from 'react';

function Checkbox(props) {
    function handleChange() {
        if (props.onChange) {
            props.onChange()
        }
    }

    return (
        <label className={"c-checkbox"}>
            <input type="checkbox" checked={props.checked} onChange={handleChange}/>
            {props.label}
        </label>
    );
}

export default Checkbox;

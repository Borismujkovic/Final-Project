import React from 'react';
import "./Form.scss"

const Form = (props) => {
    return (
        <div id="form">
            <label htmlFor="">
                User Email:
            <input type="text" />
            </label>
            <label htmlFor="">
        Password:
            <input type="text" name="" id="" />
            </label>
        </div>
    )
}

export default Form
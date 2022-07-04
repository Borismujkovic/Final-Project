import React from 'react';
import "./CreateNew.scss"

const CreateNew = (props) => {
    return (
        <div id="createNew">
            <label htmlFor="">
                 Date:
                <input placeholder=""></input>
            </label>
            <label htmlFor="">
                 Company ID:
                <input placeholder=""></input>
            </label>
            <label htmlFor="">
                 Phase:
                <input placeholder=""></input>
            </label>
            <label htmlFor="">
                 Status:
                <input placeholder=""></input>
            </label>
            <label htmlFor="">
                 Report:
                <input type="text"></input>
            </label>
            <button>Submit</button>
        </div>
    )
}

export default CreateNew
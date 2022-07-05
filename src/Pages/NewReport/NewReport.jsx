import React from 'react';
import "./NewReport.scss"
import Header from "../../Components/Header/Header"
import CreateNew from "../../Components/CreateNew/CreateNew"
import {Link} from "react-router-dom"


const NewReport = (props) => {
    return (
        <div id="newReport">
         
            <CreateNew/>
        </div>
    )
}

export default NewReport
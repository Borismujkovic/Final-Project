import React from 'react';
import "./Form.scss"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Form = (props) => {

    const [company, setCompany] = useState("")

    const getCompany = (event) => {
        setCompany(event.target.value)
    }

    return (
        <div id="form">
            <div className='logoImg'>
                <img src="https://iconape.com/wp-content/files/qa/334838/png/334838.png" alt="" />
             </div>
            <div className='login'>
                <h1>Login</h1>
                <label>
                    User Email:
                </label>
                    <input type="text"/>
                <label>
                    Password:
                </label>
                    <input type="password" name="" id=""/>
                <label>
                    Company:
                </label>
                <select id="" onChange={getCompany}>
                    <option selected disabled hidden>Select company</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Google">Google</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Alphabet">Alphabet</option>
                    <option value="Microsoft">Microsoft</option>
                </select>
                <Link to="/home-page" onClick={()=> {
                    props.getUser(company)
                }}>Login</Link>
            </div>
           
        </div>
    )
}

export default Form
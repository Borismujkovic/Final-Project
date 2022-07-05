import React from 'react';
import "./Form.scss"

const Form = (props) => {
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
                <select name="company" id="">
                    <option selected disabled hidden>Select company</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                    <option value="tesla">Tesla</option>
                    <option value="alphabet">Alphabet</option>
                    <option value="microsoft">Microsoft</option>
                </select>
                <button>Login</button>
            </div>
           
        </div>
    )
}

export default Form
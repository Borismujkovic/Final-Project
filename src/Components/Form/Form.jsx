import React from 'react';
import "./Form.scss"

const Form = (props) => {
    return (
        <div id="form">
            <div className='img'>
                <img src="https://iconape.com/wp-content/files/qa/334838/png/334838.png" alt="" />
            </div>
            <div className='login'>
            <label>
                User Email:
            </label>
            <input type="text" />
            <label>
                Password:
            </label>
            <input type="text" name="" id=""/> 
            <label>
                Company:
            </label>
                <select name="company" id="">
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                </select>
            <button>LogIn</button>
            </div>

            <div className='logo'>
                <a href="https://www.google.com/"  target='#blank'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png" alt=""/>
                </a>
                <a href="https://www.youtube.com/"  target='#blank'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
                </a>
                <a href="https://www.facebook.com/"  target='#blank'>
                <img src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg" alt="" />
                </a>
                
            </div>
        </div>
    )
}

export default Form
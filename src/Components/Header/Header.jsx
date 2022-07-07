import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom"

const Header = (props) => {
    

    const deleteToken = () => {
        props.setToken('')
        localStorage.clear()
      }
    return (
        <div id="header">
            <Link to='/admin/home-page'><img src="https://iconape.com/wp-content/png_logo_vector/hr-lab-logo.png" alt="HR Lab logo" /></Link>
            <button className='btnLogout' onClick={() => deleteToken()}>Logout</button>

        </div>
    )
}

export default Header
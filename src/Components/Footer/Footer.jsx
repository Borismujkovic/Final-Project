import React from 'react';
import "./Footer.scss"

const Footer = (props) => {
    return (
        <div id="footer">
           <ul className='listOfCompanies'>
                <li><a href="https://www.google.com" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/104/104093.png" alt="" /></a></li>
                <li><a href="https://sr-rs.facebook.com/" target="_blank" ><img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" /></a></li>
                <li><a href="https://www.tesla.com/" target="#blank"><img src="https://cdn-icons-png.flaticon.com/128/1724/1724639.png" alt="" /></a></li>
                <li><a href="https://www.alphabet.com/en-ww" target="#blank"><img src="https://cdn-icons-png.flaticon.com/128/3522/3522242.png" alt="" /></a></li>
                <li><a href="https://www.microsoft.com/sr-latn-rs/" target='#blank'><img src="https://cdn-icons-png.flaticon.com/128/732/732068.png" alt="" /></a></li>
           </ul>
        </div>
    )
}

export default Footer
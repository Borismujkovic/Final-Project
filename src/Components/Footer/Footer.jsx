import React from 'react';
import "./Footer.scss"

const Footer = (props) => {
    return (
        <div id="footer">
           <ul className='listOfCompanies'>
                <li><a href="https://www.google.com" target="_blank">Google</a></li>
                <li><a href="https://sr-rs.facebook.com/" target="_blank" >Facebook</a></li>
                <li><a href="https://www.tesla.com/" target="#blank">Tesla</a></li>
                <li><a href="https://www.alphabet.com/en-ww" target="#blank">Alphabet</a></li>
                <li><a href="https://www.microsoft.com/sr-latn-rs/" target='#blank'>Microsoft</a></li>
           </ul>
        </div>
    )
}

export default Footer
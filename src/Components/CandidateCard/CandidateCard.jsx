import React from 'react';
import "./CandidateCard.scss"
import { Link } from 'react-router-dom';


const CandidateCard = (props) => {
    return (
        
        <div id="candidateCard">
<<<<<<< HEAD
        <Link to="./details">
        <div className='wrap'> 
         <img src={props.candidate.avatar} alt=""></img>
         <h2>{props.candidate.name}</h2>
        </div>
        </Link>
=======
            <img src="https://editorial01.shutterstock.com/wm-preview-1500/7286607a/9319a343/Shutterstock_7286607a.jpg" alt="" />
            <h2>Marko Milosevic</h2>
>>>>>>> 97d3fd980eed55ec21c926a7ec5bb81e66493366
        </div>
          
        
         
             
             
     
             
    )
}

export default CandidateCard
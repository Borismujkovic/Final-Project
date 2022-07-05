import React, { useContext } from 'react';
import "./HomePage.scss"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CandidateCard from "../../Components/CandidateCard/CandidateCard"
import {Link} from "react-router-dom"



const HomePage = (props) => {



    return (
        <div id="homePage">
            <Header />
            <div className='wrap'>
            <Link to="/admin-page" className='myCandidates'>My candidates</Link>
            <div className='search-image'>
                <input type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
                
            </div>
            <main>
            <div className='cardWrapper'>
                {props.candidates.map(e => <CandidateCard candidate={e} selectCandidate={props.selectCandidate}/>)}
            </div>
            </main>
            <Footer />
        </div>
            
            
           
            
    )
}

export default HomePage
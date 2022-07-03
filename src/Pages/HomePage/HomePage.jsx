import React from 'react';
import "./HomePage.scss"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CandidateCard from "../../Components/CandidateCard/CandidateCard"
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div id="homePage">
            <Header />
            <input placeholder='search'></input>
            <Link to="/admin-page">My Candidates</Link>
            <div className='main'>
            {props.candidates.map(e => <CandidateCard candidate={e}/>)}
            </div>
            <Footer />
        </div>
            
            
           
            
    )
}

export default HomePage
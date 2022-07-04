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
            <div className='search-image'>
                <input type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
                <Link to="/admin-page" className='myCandidates'>My candidates</Link>
            </div>
            <main>
            <div className='cardWrapper'>
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
            </div>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
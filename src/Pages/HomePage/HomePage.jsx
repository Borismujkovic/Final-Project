import React, { useContext } from 'react';
import "./HomePage.scss"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CandidateCard from "../../Components/CandidateCard/CandidateCard"



const HomePage = (props) => {



    return (
        <div id="homePage">
            <Header />
            
            <CandidateCard />
            <Footer />
            HomePage
        </div>
    )
}

export default HomePage
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
                <div className='search'>
                    <input placeholder='Search'></input>
                    <button><img src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1656928144~hmac=49c4cd113a90d6cebd6b5fa81fafca53" alt="" /></button>
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
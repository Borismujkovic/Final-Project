import React, { useContext } from 'react';
import "./HomePage.scss"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import CandidateCard from "../../Components/CandidateCard/CandidateCard"
import AppContext from '../../State/AppContext';


const HomePage = (props) => {
const {theme} = useContext(AppContext)
const {changeTheme} = useContext(AppContext)
console.log(theme)


    return (
        <div id="homePage">
            <Header />
            <button onClick={() => changeTheme('blue')}>change</button>
            <button onClick={() => changeTheme('red')}>red</button>
            <CandidateCard />
            <Footer />
            HomePage
        </div>
    )
}

export default HomePage
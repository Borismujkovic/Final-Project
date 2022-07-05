import React from 'react';
import "./NewReport.scss"
import Header from "../../Components/Header/Header"
import CreateNew from "../../Components/CreateNew/CreateNew"
import ChooseCandidate from '../../Components/ChooseCandidate/ChooseCandidate';


const NewReport = (props) => {
    return (
        <div id="newReport">
            <Header />
            <main>
                <div className='chooseCandidate'>
                    <div className='ccHeader'>
                        <p className='number'>1</p>
                        <h2>Choose candidate:</h2>
                    </div>
                    <ChooseCandidate></ChooseCandidate>
                    <ChooseCandidate></ChooseCandidate>
                    <ChooseCandidate></ChooseCandidate>
                </div>
                <div className='createNewReport'>
                    <div className='cnrHeader'>
                        <p className='number'>2</p>
                        <h2>Create new report:</h2>
                    </div>
                    <CreateNew></CreateNew>
                </div>
            </main>
            

        </div>
    )
}

export default NewReport
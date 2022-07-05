import React from 'react';
import "./NewReport.scss"
import Header from "../../Components/Header/Header"
import CreateNew from "../../Components/CreateNew/CreateNew"
import {Link} from "react-router-dom"


const NewReport = (props) => {
    return (
        <div id="newReport">
            <Header />
            <main>
            <div className='search'>
        <div>
            <Link to="/admin-page" className='admin-button'>Admin Page</Link>
            <Link to="/new-report" className='newReport-button'>New Report</Link>
        </div>
            <div className='search-image'>
                <input type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
        </div>

              <div className="wrapMain">
                  <h1>Google</h1>
                  <div className="createNewReport">
                     <div className="chooseCandidate">
                         <ul>
                             Choose candidate:
                             <li>Name</li>
                             <li>Name</li>
                             <li>Name</li>
                             <li>Name</li>
                         </ul>
                         
                    </div>   
                    <CreateNew />
                    </div>
             </div>
                    
            </main>
            

        </div>
    )
}

export default NewReport
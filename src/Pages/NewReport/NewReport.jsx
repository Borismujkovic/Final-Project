import React from 'react';
import "./NewReport.scss"
import Header from "../../Components/Header/Header"
import CreateNew from "../../Components/CreateNew/CreateNew"


const NewReport = (props) => {
    return (
        <div id="newReport">
            <Header />
            <main>
              <div className="wrapMain">
                  <h1>Google</h1>
                  <div className="createNewReport">
                     <div className="chooseCandidate">
                         <ul>
                             Choose candidate:
                             <li>Pera</li>
                             <li>Mika</li>
                             <li>Zika</li>
                             <li>Joca</li>
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
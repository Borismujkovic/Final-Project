import './App.css';
import Details from './Pages/Details/Details';
import NewReport from './Pages/NewReport/NewReport';
import HomePage from "../src/Pages/HomePage/HomePage"
import Admin from "../src/Pages/Admin/Admin"
import Login from "../src/Pages/Login/Login"
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
const [candidates, setCandidates] = useState([]) // fetchujemo sve kandidate
const [reports, setReports] = useState([]) // fetchujemo sve reportove
const [user, setUser] = useState("Google") //hvatamo informaciju o tome koja kompanija se ulogovala
const [openModal, setOpenModal] = useState(false)
const [modalData, setModalData] = useState(null)
const [candidateInfo, setCandidateInfo] =useState(null)



const selectCandidate = (obj) => {
  setCandidateInfo(obj)
}

const selectReport = (obj) => {
  setModalData(obj)
}


const toggleModal = () => {
  setOpenModal(!openModal)
}

const getUser = (something) => {
  setUser(something)
}


const fetchCandidates = () => {
  fetch('http://localhost:3333/api/candidates')
  .then(res => res.json())
  .then(res => setCandidates(res))
}

const fetchReports = () =>{
  fetch('http://localhost:3333/api/reports')
  .then(res => res.json())
  .then(res => setReports(res))
}

useEffect(()=>{
  fetchCandidates();
  fetchReports()
}, [])







  return (
    
    <div id="App">
      <Switch>
        <Route exact path ='/'><Login getUser={getUser}></Login></Route>
        <Route path ='/home-page'><HomePage candidates={candidates} selectCandidate={selectCandidate} ></HomePage></Route>
        <Route path='/admin-page'> <Admin reports={reports} toggleModal={toggleModal} openModal={openModal} selectReport={selectReport} modalData={modalData} user={user}></Admin></Route>
        <Route path='/details' ><Details candidates={candidates} modalData={modalData} reports={reports} toggleModal={toggleModal} openModal={openModal} candidateInfo={candidateInfo} selectReport={selectReport}></Details></Route>
        <Route path='/new-report'><NewReport></NewReport></Route>
      </Switch>
    </div>
  );
}

export default App;
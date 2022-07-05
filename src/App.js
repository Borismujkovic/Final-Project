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
const [user, setUser] = useState("") //hvatamo informaciju o tome koja kompanija se ulogovala
const [openModal, setOpenModal] = useState(false)



const fetchCandidates = (str) => {
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

const toggleModal = () => {
  setOpenModal(!openModal)
}

  return (
    
    <div id="App">
      

      <Switch>
        <Route exact path ='/'><Login></Login></Route>
        <Route path ='/home-page'><HomePage></HomePage></Route>
        <Route path='/admin-page'> <Admin reports={reports} toggleModal={toggleModal} openModal={openModal}></Admin></Route>
      <Route path='/details'><Details></Details></Route>
      <Route path='/new-report'><NewReport></NewReport></Route>
      </Switch>
    </div>
  );
}

export default App;
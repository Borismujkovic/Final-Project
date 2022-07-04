import './App.css';
import Details from './Pages/Details/Details';
import NewReport from './Pages/NewReport/NewReport';
import HomePage from "../src/Pages/HomePage/HomePage"
import Admin from "../src/Pages/Admin/Admin"
import Login from "../src/Pages/Login/Login"
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
const [candidates, setCandidates] = useState([])
const [reports, setReports] = useState([])



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






  return (
    
    <div id="App">
      
      <Switch>
        <Route exact path ='/'><Login></Login></Route>
        <Route path ='/home-page'><HomePage candidates={candidates}></HomePage></Route>
        <Route path='/admin-page'> <Admin></Admin></Route>
        <Route path='/details'><Details></Details></Route>
        <Route path='/new-report'><NewReport></NewReport></Route>
      </Switch>
    </div>
  );
}

export default App;
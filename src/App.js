import "./App.css";
import Details from "./Pages/Details/Details";
import NewReport from "./Pages/NewReport/NewReport";
import HomePage from "../src/Pages/HomePage/HomePage";
import Admin from "../src/Pages/Admin/Admin";
import Login from "../src/Pages/Login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [candidates, setCandidates] = useState([]); // fetchujemo sve kandidate
  const [reports, setReports] = useState([]); // fetchujemo sve reportove
  const [companies, setCompanies] = useState([]) // fetchujemo sve kompanije
  const [user, setUser] = useState(window.localStorage.getItem("user")); //hvatamo informaciju o tome koja kompanija se ulogovala
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"))
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    setTheme(!theme)
  }


  const selectCandidate = (obj) => {
    setCandidateInfo(obj);
  };

  const selectReport = (obj) => {
    setModalData(obj);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const getUser = (something) => {
    setUser(something);
  };

  const getUserId = () => {
    companies.find(e => {
      if(e.name === user) return window.localStorage.setItem("userId", e.id)
    })
  }

  const fetchCandidates = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setCandidates(res));
  };

  const fetchReports = () => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setReports(res));
  };

  const fetchCompanies = () => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  };

  useEffect(() => {
    fetchCompanies()
  }, []);

  const fetchAllData = () => {
    console.log('radim')
    fetchCandidates();
    fetchReports();
  }

  const localStorage = () => {
    localStorage.setItem("token", "poyy");
  };
  
 
  
  return (<div id={theme ? "light-app" : "dark-app"}> {!token && <Switch>
    <Redirect from="/admin" to="/" />
      <Route exact path="/">
          <Login
            getUserId={getUserId}
            getUser={getUser}
            setToken={setToken}
            token={token}
            localStorage={localStorage}
            user={user}
            companies={companies}
            fetchAllData={fetchAllData}
          ></Login>
        </Route>

    </Switch>}


      {token && 
      <Switch>
        <Redirect exact from="/" to="/admin/home-page" />
        <Route exact path="/">
          <Login
          getUserId={getUserId}
            getUser={getUser}
            setToken={setToken}
            token={token}
            localStorage={localStorage}
            user={user}
            changeTheme={changeTheme}
            companies={companies}
            fetchAllData={fetchAllData}
            ></Login>
        </Route>
        <Route path="/admin/home-page">
          <HomePage
            candidates={candidates}
            selectCandidate={selectCandidate}
            setToken={setToken}
            changeTheme={changeTheme}
          ></HomePage>
        </Route>
        <Route path="/admin/admin-page">
          {" "}
          <Admin
            reports={reports}
            toggleModal={toggleModal}
            openModal={openModal}
            selectReport={selectReport}
            modalData={modalData}
            user={user}
            fetchReports={fetchReports}
            token={token}
            setToken={setToken}
            changeTheme={changeTheme}
            ></Admin>
        </Route>
        <Route path="/admin/details">
          <Details
            candidates={candidates}
            modalData={modalData}
            reports={reports}
            toggleModal={toggleModal}
            openModal={openModal}
            candidateInfo={candidateInfo}
            selectReport={selectReport}
            setToken={setToken}
            changeTheme={changeTheme}
            ></Details>
        </Route>
        <Route path="/admin/new-report">
          <NewReport candidates={candidates} token={token} userId={userId} user={user} fetchReports={fetchReports}  setToken={setToken} changeTheme={changeTheme}></NewReport>
        </Route>
      </Switch>
  
  
}
  </div>
  )
}

export default App;

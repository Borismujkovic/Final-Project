import './App.css';
import Details from './Pages/Details/Details';
import NewReport from './Pages/NewReport/NewReport';
import HomePage from "../src/Pages/HomePage/HomePage"
import Admin from "../src/Pages/Admin/Admin"
import Login from "../src/Pages/Login/Login"


function App() {
  return (
    <div id="App">
    <HomePage></HomePage>
    <Admin></Admin>
    <Details></Details>
    <Login></Login>
    <NewReport></NewReport>
    </div>
  );
}

export default App;

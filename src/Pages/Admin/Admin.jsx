import React, { useState } from 'react';
import "./Admin.scss";
import Header from "../../Components/Header/Header"
import Modal from "../../Components/Modal/Modal"
import ReportList from "../../Components/ReportsList/ReportsList"
import {Link} from "react-router-dom"
import Footer from '../../Components/Footer/Footer';

const Admin = (props) => {
    const [searchReports, setSearchReports] = useState('');

  const searchFilteredReports = (event) => {
    setSearchReports(event.target.value);
  };

  const filteredReports = props.reports.filter((c) =>
    c.candidateName.toLowerCase().includes(searchReports.toLowerCase())
  );

    
    return (
        <div id="admin">
        {props.openModal && <Modal toggleModal={props.toggleModal} selectReport={props.selectReport} modalData={props.modalData}/>}
        <Header />
        <main>

        <div className='search'>
        <div>
            <Link className='admin-button'>Admin Page</Link>
            <Link to="/new-report" className='newReport-button'>New Report</Link>
        </div>
            <div className='search-image'>
                <input onChange={searchFilteredReports} type="text" />
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="" />
            </div>
        </div>
        <div className='reports'>
        {/* {props.reports.map((e) => <ReportList reports={e} toggleModal={props.toggleModal} selectCandidate={props.selectCandidate}/>)} */}
        {filteredReports.map(e => {
            if(e.companyName === props.user){
              return  <ReportList reports={e} toggleModal={props.toggleModal} selectReport={props.selectReport} fetchReports={props.fetchReports}/>
            }
        })}
        </div>
        </main>
        {/* <Footer /> */}
        </div>
    )
}

export default Admin
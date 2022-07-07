import React,{useState} from 'react';
import "./CreateNew.scss"
import { Link } from 'react-router-dom';

const CreateNew = (props) => {
    const [body,setBody] = useState({
        candidateId: "",
        candidateName: "",
        companyId: props.userId,
        companyName: props.user,
        interviewDate:"",
        phase: "",
        status: "",
        note: ""
    }
    )
    const postReport = () => {
        fetch("http://localhost:3333/api/reports",{
            method: "POST",
            body: JSON.stringify({...body, candidateId: props.chosenCandidate.id, candidateName: props.chosenCandidate.name} ),
            headers:{"content-type": "application/json",
            "Authorization" : `Bearer ${props.token}`}
        }).then(res => res.json())
        .then(props.fetchReports())
    }
    const log = () => {
        console.log(props.chosenCandidate)
    }
    return (
        <div id="createNew">
            <div className='form'>
            <div className='wrapDropdown'>
            <label>
                 <span>Date:</span>
                <input type="date" placeholder="" className='date' onChange={(event) => {
                    setBody({...body, interviewDate: event.target.value})
                }}></input>
            </label>
            <label>
                 <span onClick={log}>Status:</span>
                <select  name="Status" id="" onChange={(event) => {
                    setBody({...body, phase: event.target.value})
                }}>
                    <option disabled hidden>Status</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Passed">Passed</option>
                    <option value="Declined">Declined</option>
                </select>
            </label>
            <label>
                <span>Phase:</span>
                 <select name="Phase" id="" onChange={(event) => {
                    setBody({...body, status: event.target.value})
                }}>
                   <option disabled hidden>Phase</option>
                   <option value="Final">CV</option>
                    <option value="HR">HR</option>
                    <option value="Technical">Technical</option>
                    <option value="Final">Final</option>
                </select>
            </label>
            </div>
            <label className='textarea'>
               <span>Report:</span>
                <textarea className="report" type="text" onChange={(event) => {
                    setBody({...body, note: event.target.value})
                }}></textarea>
            </label>
            <Link to="/admin/admin-page">  <button onClick={postReport}>Submit</button></Link>
            </div>
        </div>
    )
}
export default CreateNew
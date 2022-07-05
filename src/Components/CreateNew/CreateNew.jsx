import React from 'react';
import "./CreateNew.scss"

const CreateNew = (props) => {
    return ( 
            
        <div id="createNew">
        
            <div className='form'>
            

            <div className='wrapDropdown'>
            <label>
                 <span>Date:</span>
                <input type="date" placeholder="" className='date'></input>
            </label>

            <label>
                 <span>Phase:</span>
                <select name="Phase" id="" >
                    <option selected disabled hidden>Phase</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Active">Active</option>
                    <option value="Declined">Declined</option>
                </select>
            </label>
            
            <label>
                <span>Status:</span>
                 <select name="Status" id="">
                   <option selected disabled hidden>Status</option>
                    <option value="HR">HR</option>
                    <option value="Technical">Technical</option>
                    <option value="Final">Final</option>
                </select>
            </label>
            </div>
            
            <label className='textarea'>
               <span>Report:</span>
                <textarea className="report" type="text"></textarea>
            </label>
            
            <button>Submit</button>
            </div>
              
        </div>
            
            
        
    )
}

export default CreateNew
            

           
           
            
            
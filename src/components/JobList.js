import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

const JobList = props => (
   
    <div className="list-container">
        {props.jobs.length? (

            props.jobs.map((job) => (
            <Link to={`${job.id}`} 
            key={job.id}
            className="job">
                {job.compName}
            </Link>
            
            ))
         ) : ( <p style={{fontWeight: 'bold'}, {textAlign: "center"}}>no jobs...yet</p>)}
    </div>
   
)

export default JobList

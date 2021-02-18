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
         ) : ( <h1>no jobs...yet</h1>)}
    </div>
   
)

export default JobList

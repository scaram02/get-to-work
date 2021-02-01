import React from 'react'
import {Link} from "react-router-dom"

const JobList = props => (
    //     props.jobs.length? props.jobs.map((job) => {
    //      return (
    //     <div>
    //         {job.compName}
    //     </div>
    // ) 
    // }) 
    <div>
        {props.jobs.length? (
            
            props.jobs.map((job) => (
                
            <Link to={`${job.id}`} key={job.id}>{job.compName}</Link>
            ))
         ) : ( <h1>es gibt keine Arbeit für dich</h1>)}
    </div>
   
)

export default JobList

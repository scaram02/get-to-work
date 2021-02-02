import React from 'react'
import {Link} from 'react-router-dom'
import EditJob from './EditJob'


const JobView = props => {

    const id = props.match.params.id
    const job = props.jobs && props.jobs.find(job => {
        return job.id == id
        // console.log("Job dot id", typeof job.id, "ID",typeof  id, job.id === Number(id))
    })


    const deleteJob = id => {
        props.setJobs(props.jobs.filter((job) => job.id != id))
        props.history.push('/')
    }

    return (
        <div style={{backgroundColor: "blue"}}>
            <h1>{job.jobTitle}</h1>
            <h2>{job.compName}</h2>
            {/* <EditJob/> */}
            <button onClick={() => deleteJob(job.id)}>Delete me</button>
            {/* <Link to="/">back</Link> */}
        </div>
    )
}

export default JobView

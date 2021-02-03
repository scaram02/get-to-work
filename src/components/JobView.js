import React, {useState} from 'react'
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



    //edit
    const blankForm = {id: null, jobTitle: '', compName: '', applyBy: '', url: ''}
    const [currentJob, setCurrentJob] = useState(blankForm)
    const [editingJob, setEditingJob] = useState(false)

    const toggleEditingJob = job => {
        setEditingJob(true)

        setCurrentJob({id: job.id, compName: job.compName, jobTitle: job.jobTitle, url: job.url})
    }

    const updateJob = (id, updatedJob) => {
        setEditingJob(false)

        setCurrentJob(props.jobs.map((job) => (job.id === id? updatedJob: job)))
    }


    return (
        <div style={{backgroundColor: "blue"}}>
            <h1>{job.jobTitle}</h1>
            <h2>{job.compName}</h2>
            <button onClick={() => setEditingJob(!editingJob)}>TogglEdit</button>
            {editingJob? (
               <EditJob job={job} editingJob={editingJob} setEditingJob={setEditingJob} toggleEditingJob={toggleEditingJob} updateJob={updateJob}/>  
            ) : <div/>}
            <button onClick={() => deleteJob(job.id)}>Delete me</button>
            {/* <Link to="/">back</Link> */}
        </div>
    )
}

export default JobView

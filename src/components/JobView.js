import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import EditJob from './EditJob'
import Finished from './Finished'


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
    const blankForm = {id: '', jobTitle: '', compName: '', applyBy: '', url: ''}
    const [currentJob, setCurrentJob] = useState(blankForm)
    const [editingJob, setEditingJob] = useState(false)

    const toggleEditingJob = job => {
        setEditingJob(!editingJob)

        setCurrentJob({id: job.id, compName: job.compName, jobTitle: job.jobTitle, url: job.url}) 
    }

    const updateJob = (id, updatedJob) => {
        setEditingJob(!editingJob)
        props.setJobs(props.jobs.map((job) => (job.id == id? updatedJob: job)))
    }

    const [finished, setFinished] = useState(false)

    const showJob = <p>See {job.url} for more info</p>
    const notes = <p>{job.notes}</p>

    return (
        <div className='view'>
            <h1>{job.jobTitle}</h1>
            <h2>{job.compName}</h2>
            <h3>{job.applyBy}</h3>
            {job.url && showJob}
            {job.notes && notes}
            <button id='remove' onClick={() => deleteJob(job.id)}>Remove this Job</button>
           <button onClick={() => toggleEditingJob(job)}>Edit this Job</button>
            {editingJob? 
            (
               <EditJob 
               job={job} 
               setEditingJob={setEditingJob} 
               editingJob={editingJob} 
               updateJob={updateJob} 
               currentJob={currentJob}/>  
            ) : <div/>}
        <Finished finished={finished} setFinished={setFinished}/>
        
            
            {/* <Link to="/">back</Link> */}
        </div>
    )
}

export default JobView

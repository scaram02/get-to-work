import React, { useEffect, useState } from 'react'

const EditJob = props => {
   
    const [job, setJob] = useState(props.job)
  
    const handleInputChange = e => {
        const {name, value} = e.target
        setJob({...job, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateJob(job.id, job)
        props.setEditingJob(!props.editingJob)
    }

    useEffect(() => {
        setJob(props.currentJob)
    }, [props])

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Company Name" 
            name="compName" 
            value={job.compName || ''}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Job Title" 
            name="jobTitle" 
            value={job.jobTitle  || ''}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Apply By" 
            name="applyBy" 
            value={job.applyBy  || ''}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Website" 
            name="url" 
            value={job.url  || ''} 
            onChange={handleInputChange}/>

            <button >Edit Job</button>
            </form>
        </div>
    )
}

export default EditJob

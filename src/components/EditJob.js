import React, { useEffect, useState } from 'react'

const EditJob = props => {
   
    const [job, setJob] = useState(props.currentJob)
    const {compName, jobTitle, applyBy, url} = props.job

    const handleInputChange = e => {
        const {name, value} = e.target
        setJob({...job, [name]: value})
        console.log(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateJob(job.id, job)
    }

    useEffect(() => {
        setJob(props.currentJob)
    }, [props])

    return (
        <div style={{backgroundColor: "green"}}>
           <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Company Name" 
            name="compName" 
            value={compName}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Job Title" 
            name="jobTitle" 
            value={jobTitle}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Apply By" 
            name="applyBy" 
            value={applyBy}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Website" 
            name="url" 
            value={url} 
            onChange={handleInputChange}/>

            <button>Edit Job</button>
            </form>
        </div>
    )
}

export default EditJob

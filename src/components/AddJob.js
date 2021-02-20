import React, {useState} from 'react'


const AddJob = props => {
    const jobForm = {id: null, compName: '', jobTitle: '', applyBy: '', url: '', notes: ''}
    const [job, setJob] = useState(jobForm)

    const handleChange = e => {
        const {name, value} = e.target;

        setJob({...job, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!job.compName || !job.jobTitle) return
        props.addJob(job)
        setJob(jobForm)
        console.log("dis be da job", job)
    }


    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Company Name" 
            name="compName" 
            value={job.compName}
            onChange={handleChange}/>

            <input type="text" 
            placeholder="Job Title" 
            name="jobTitle" 
            value={job.jobTitle}
            onChange={handleChange}/>

            <input type="text" 
            placeholder="Apply By" 
            name="applyBy" 
            value={job.applyBy}
            onChange={handleChange}/>

            <input type="text" 
            placeholder="Website" 
            name="url" 
            value={job.url} 
            onChange={handleChange} />
            
            <input type="text" 
            placeholder="Notes" 
            name="notes" 
            value={job.notes} 
            onChange={handleChange}/>

            <button>Add New Job</button>
            </form>
        </div>
    )
}


export default AddJob


import React from 'react'

const JobView = props => {

    const id = props.match.params.id
    const job = props.jobs.find((job) => {
        return job.id === id
    })
console.log(job)

    return (
        <div style={{backgroundColor: "blue"}}>
            {/* <h1>{job.jobTitle}</h1> */}
            <h1>hej</h1>
        </div>
    )
}

export default JobView

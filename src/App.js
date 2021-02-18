import React, {useState} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import AddJob from './components/AddJob'
import JobList from './components/JobList'
import JobView from './components/JobView'

const App = () => {
const [jobs, setJobs] = useState([])


const addJob = job => {
  job.id = jobs.length+1;
  setJobs([...jobs, job])
}




  return (
    <div className='container'>
    <Route exact path="/" />
     <JobList jobs={jobs} />

     <div className="content-container">
     <AddJob addJob={addJob}/>
    


    <Route exact path="/:id"
  render={(props) => (
  <JobView {...props} 
  jobs={jobs} setJobs={setJobs} 
/> 
)}/>
</div>
    </div>
  );
}

export default App;

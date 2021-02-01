import React, {useState} from 'react'
import {Route} from 'react-router-dom'
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
    <div>
      

      <AddJob addJob={addJob}/>
      <JobList jobs={jobs}/>

      <Route exact path="/:id" 
      render={props => {
        <JobView
        {...props}
        jobs={jobs}
        />
      }}/>
       
      
    </div>
  );
}

export default App;

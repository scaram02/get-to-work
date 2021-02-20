import React, {useState, useEffect} from 'react'
import checkedIcon from '../images/checked.png'
import uncheckedIcon from '../images/unchecked.png'
// import './App.css'

 const Finished = (props) => {

useEffect(() => {   console.log(props.finished)}, [props]);

const handleChange = e => {
    e.preventDefault()
    props.setFinished(!props.finished)
}

const dateSubmitted = new Date().toString().split(' ').slice(1, 4).join(' ')
const submitMessage = props.finished? `${dateSubmitted}` : ""
const icon = props.finished? checkedIcon : uncheckedIcon

    return (
        <div className='submit-container'  onClick={handleChange} >
        <img src={icon} alt="checkbox submitted"className='checkbox'/>
        <p>Submitted {submitMessage}</p>
        </div>
    )
}

export default Finished
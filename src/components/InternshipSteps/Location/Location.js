import React from 'react';
import "./Location.css"
import Select from "react-select"

export default function Location(props) {

    const opts = [
        { value: 'Uae', label: 'United Arab Emirates' },
        { value: 'KSA', label: 'Kingdom of Saudi Arabia' },
        { value: 'QTR', label: 'Qatar' }
      ]
    
    const handleChange = (event) => {
        props.setLocation(event.value)
    }
    return (
        <div 
        className='location__choice'>
        <h1 
        className='title__location'> Location </h1>
            <Select 
            placeholder="Enter Location" 
            value={props.location} 
            options={opts} 
            onChange={handleChange}/>
        </div> 
    )
}
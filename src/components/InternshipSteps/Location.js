import React from 'react';
import "./Location.css"
import Select from "react-select"

export default function Location() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div className='location__choice'>
        <h1 className='title__location'> Location </h1>
            <Select placeholder="Select Location"/>
        </div> 
    )
}
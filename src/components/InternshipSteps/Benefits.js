import React from 'react'
import "./Benefits.css"

export default function Benefits(props) {
    const preventDefault = (event) => {
        event.preventDefault()
    }
    return (
        <div className='benefits'>
            <h1 className='benefits__title'> Benefits </h1>
            <form onChange={preventDefault}>
            <textarea className='text-area' value={props.benefits} placeholder='Description' onChange={(event)=> props.setBenefits(event.target.value)}>
            
            </textarea>
                
            </form>
        </div>
    )
}
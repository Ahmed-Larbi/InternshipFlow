import React from 'react';
import "./Desc.css"

export default function Description(props) {

    const handleClick = (event)=> {
        console.log(event.target.value)
        props.setDescription(event.target.value)
    }

    return (
        <div className='description'>
            <h1 className='desc__title'> Description </h1>
            <textarea className='text-area' placeholder='Description' value={props.description} onKeyUp={handleClick}>
            
            </textarea>
        </div>
    )
}
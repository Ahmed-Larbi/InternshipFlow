import React from 'react';
import "./Desc.css"

export default function Description(props) {
    const text = props.description;

    const preventDefault = (event) => {
        event.preventDefault()
    }


    return (
        <div className='description'>
            <h1 className='desc__title'> Description </h1>
            <form onChange={preventDefault}>
            <textarea className='text-area' value={text} placeholder='Description' onChange={(event)=> props.setDescription(event.target.value)}>
            
            </textarea>
                
            </form>
        </div>
    )
}
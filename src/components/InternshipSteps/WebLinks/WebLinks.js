import React from 'react'
import "./WebLinks.css"
import addButton from "../../../assets/buttons/add-square.png"

export default function WebLinks(props) {




    const handleSubmit = (event)=> {
        event.preventDefault();
    }

    return (
        <div className='weblinks__choice'>
        <h1 className='weblinks__title'> Web-Links & Resources </h1>
        <form onSubmit={handleSubmit}>
            <input placeholder='Add URL' className="search__bar" onChange={(event) => props.setWebLinks(event.target.value)}/>
            <button className='addurl__button'> <img src={addButton} alt=""/> Add URL</button>
        </form>
        </div>
        
    )
}
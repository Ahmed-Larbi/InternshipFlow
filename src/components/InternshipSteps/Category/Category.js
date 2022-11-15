import React from 'react'
import "./Category.css"
import cancel from "../../../assets/buttons/cancel.png"

export default function Category(props) {




    const handleSubmit = (event)=> {
        if (event.keyCode === 13) 
        {
            if(event.target.value === '')
            {
                alert("Enter a value Please!")
            }
            else{

                props.setCategoyDetails([...props.searchResults,event.target.value]) 
                event.target.value = ''
            }

        }
    }

        
    const deleteTag = (value) => {
        var newArray = [...props.searchResults]
        let idx = newArray.indexOf(value)
        if(idx !== -1)
        {
            newArray.splice(idx, 1)
            props.setCategoyDetails(newArray)
        }


    }

    const handleRefresh = event => {
        event.preventDefault();
    
    }

    return (
        <div className='category__choice'>
        <h1 className='cat__title'> Category </h1>
        <form onSubmit={handleRefresh}>
            <input placeholder='Search Category' onKeyUp={handleSubmit} className="search__bar"/>
            
            </form>
            {
                <div className='container'>
                {
                props.searchResults && props.searchResults.map( (idx,value)=> {
                    return  <h3 className='search__tags'> {idx} <img className='cancel__img' src={cancel} alt="" onClick={() => deleteTag(idx)}/></h3> 
                }) }
                </div>
            }
        </div>
        
    )
}
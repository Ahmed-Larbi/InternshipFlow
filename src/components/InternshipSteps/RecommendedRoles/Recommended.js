import React from 'react'
import "./Recommended.css"
import cancel from "../../../assets/buttons/cancel.png"

export default function RecommendedRoles(props) {


    // TODO: Need to connect all object properties to global state.

    const handleSubmit = (event)=> {
        if (event.keyCode === 13) 
        {
            if(event.target.value === '')
            {
                alert("Enter a value Please!")
            }
            else{

                props.setRecommendedDetails([...props.recommendedDetails,event.target.value]) 
                event.target.value = ''
            }

        }
    }

        
    const deleteTag = (value) => {
        var newArray = [...props.recommendedDetails]
        let idx = newArray.indexOf(value)
        if(idx !== -1)
        {
            newArray.splice(idx, 1)
            props.setRecommendedDetails(newArray)
        }


    }

    const handleRefresh = event => {
        event.preventDefault();
    
    }

    return (
        <div className='recommended__choice'>
        <h1 className='rec__title'> Recommended-Roles </h1>
        <form onSubmit={handleRefresh}>
            <input placeholder='Search Roles' onKeyUp={handleSubmit} className="search__bar"/>
            
            </form>
            {
                <div className='container'>
                {
                props.recommendedDetails && props.recommendedDetails.map( (result)=> {
                    return  <h3 className='search__tags'> {result} <img className='cancel__img' src={cancel} alt="" onClick={() => deleteTag(result)}/></h3> 
                }) }
                </div>
            }
        </div>
        
    )
}
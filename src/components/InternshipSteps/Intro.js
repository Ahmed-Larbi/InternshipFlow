import React from 'react'
import "./Intro.css"
import cancel from "../../assets/buttons/cancel.png"

export default function Intro(props) {
    const changeHandler = (event) => {
		props.setIntroFiles([...props.introFiles, event.target.files[0]])
	};
    const deleteTag = (value) => {
        // var newArray = [props.introFiles]
        // console.log(value, newArray[0])
        // let idx = newArray.find(value)
        // if(idx !== -1)
        // {
        //     newArray.splice(idx, 1)
        //     props.setIntroFiles(newArray)
        // }

    }

    return (
        <div className='intro__side'>
        <form>

			<input type="file" multiple onChange={changeHandler} className="input__area"/>
        </form>
            {
                <div className='container'>
                {
                    props.introFiles && props.introFiles.map( (file, idx) => {
                        return <h3 className="search__tags" key={idx}> {file.name} <img className='cancel__img' src={cancel} alt="" onClick={() => deleteTag(file)}/></h3>
                    })
                }
            
                </div>
            }
		</div>
    )
}
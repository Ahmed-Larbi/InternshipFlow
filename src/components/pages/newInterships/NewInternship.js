import React from 'react';
import './newIntern.css';
import contImage from "../../../assets/buttons/arrow-right.png"
import {useNavigate } from 'react-router-dom';
import backIcon from "../../../assets/buttons/arrow-left.png"
import tickCircle from "../../../assets/buttons/tick-circle.png"
import menu from "../../../assets/buttons/menu.png"
import open from "../../../assets/buttons/arrow-right2.png"
import addButton from "../../../assets/buttons/add-square.png"
import selectedArrow from "../../../assets/buttons/selected-arrow.png"
import Category from '../../InternshipSteps/Category';
import Description from '../../InternshipSteps/Decs';
import done from "../../../assets/buttons/done-circle.png"
import Location from '../../InternshipSteps/Location';

export default function NewInternships () {
    var insideElements = "insideElements"
    var insideElementsSelected = "insideElementsSelected"
    const [catogoryDetails, setCategoyDetails] = React.useState([])
    const [description, setDescription] = React.useState()
    const [pageType, setPageType] = React.useState("");
    const [buttons, setButtons] = React.useState( [
        {title: 'Category', isActive: false, isDone: false},
        {title: 'Description', isActive: false, isDone: false},
        {title: 'Location', isActive: false, isDone: false},
        {title: 'Benefits', isActive: false, isDone: false},
        {title: 'Intro Video', isActive: false, isDone: false},
        {title: 'Mentor Details', isActive: false, isDone: false},
        {title: 'Recommended Roles', isActive: false, isDone: false},
        {title: 'Web Links & Resources', isActive: false, isDone: false},
    ])
    const navigate = useNavigate();
    const goBack = ()=> {
        navigate('/')
    }

    const handleClick = (title) => {
        setPageType(title)
        setButtons(
          buttons.map((el) =>
            el.title === title
              ? { ...el, isActive: true }
              : { ...el, isActive: false }
          )
        );
      };
        return(
    
            <div>
                <header className='header2'>
                <div className='border2'>
                    <img src={backIcon} alt="" style={{background: 'transparent'}}/>
                    <button className='backButton' onClick={goBack}>
                        Back
                    </button>
                </div>
                    <h2 className='headertitle'>
                        Add New Internship
                    </h2>
                    <div className='border'>
                        <button id='contbutton'>
                            Continue to Next Step 
                        </button>
                        <img src={contImage} alt="" style={{background: 'transparent'}}/>
                    </div>
                </header>
                <div className='intershipsSteps'>
                    <h4>
                        <span><img src={tickCircle} alt="" className='tick'/></span>Internship Description
                    </h4>
                    <h4>
                    <span><img src={tickCircle} alt="" className='tick'/></span>Internship Guide
                    </h4>
                    <h4>
                    <span><img src={tickCircle} alt="" className='tick' /></span>Surveys
                    </h4>
                    <h4>
                    <span><img src={tickCircle} alt="" className='tick'/></span>Settings
                    </h4>
                    
                </div>
                <div className='table2'>
                
                    <ul>
                    {buttons.map((el) => (
                        <li>
                        <img src={menu} alt="" className='menu'/>
                        <div className={el.isActive ? insideElementsSelected : insideElements} onClick={ ()=> handleClick(el.title)}> 
                        {el.title} 
                        {el.done && 
                        <img src={done} alt="" className='done__logo'/>}
                        {el.isActive ? <img src={selectedArrow} alt="" className='cursorImg'/> : <img src={open} alt="" className='cursorImg'/>}
                        </div>
                        </li>
                    ))}
                    <li>
                        <button className='addMore'> <img src={addButton} alt='' style={{'marginRight': '12px' , background: 'transparent'}}/>Add More </button>
                    </li>

                        
                    </ul>
                </div>
                <div className="right__body">
                {(() => {
                        switch (pageType) {
                        case "Category":   return <Category setCategoyDetails={setCategoyDetails} searchResults = {catogoryDetails}/>;
                        case "Description": return <Description setDescription={setDescription} description={description}/>;
                        case "Location":  return <Location/>;
                        case "Benefits": return "Benefits"
                        default:      return <Category/>;
                        }
                    })()}
                </div>
                
            </div>
        )
    }

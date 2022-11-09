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

export default function NewInternships () {
    const [catogoryDetails, setCategoyDetails] = React.useState([])
    const [description, setDescription] = React.useState('')
    const [pageType, setPageType] = React.useState("");
    const navigate = useNavigate();
    const goBack = ()=> {
        navigate('/')
    }

    function handleClick(event, param) {

        const buttonsGroup = document.getElementsByClassName("insideElements")
        const img = document.getElementsByClassName('cursorImg')

            for(let x=0; x<buttonsGroup.length; x++)
            {
                if(x === event.target.id-1)
                {
                    buttonsGroup[x].style.cssText = `
                    border: 1px solid #793EF5;
                    border-radius: 12px;
                    filter: drop-shadow(1px 12px 34px rgba(0, 0, 0, 0.08));
                    `;
                    img[x].src = selectedArrow;
                }
                else {
                    buttonsGroup[x].style = "overflow: revert";
                    img[x].src = open;
                }
            }
            setPageType(param);
    }
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
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={ (event) => handleClick(event,'Category')} id="1">
                                Category <img src={done} alt="" className='done__logo'/> <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu}  alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Description')} id="2">
                                Description <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Location')} id="3">
                                Location <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Benefits')} id="4">
                                Benefits <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Intro')} id="5">
                                Intro Video <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Mentor')} id="6">
                                Mentor Details <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'Roles')} id="7">
                                Recommended Roles <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} alt="" className="menu"/>
                            <div className='insideElements' onClick={(event) => handleClick(event,'W-links')} id="8">
                                Web Links & Resources <img src={open} alt="" className='cursorImg'/>
                            </div>
                        </li>
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
                        case "Location":  return "Location";
                        case "Benefits": return "Benefits"
                        default:      return <Category/>;
                        }
                    })()}
                </div>
                
            </div>
        )
    }

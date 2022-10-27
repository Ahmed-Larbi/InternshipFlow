import React, { Component } from 'react';
import './styles.css';
import contImage from "../../../assets/buttons/arrow-right.png"
import {useNavigate } from 'react-router-dom';
import backIcon from "../../../assets/buttons/arrow-left.png"
import tickCircle from "../../../assets/buttons/tick-circle.png"
import menu from "../../../assets/buttons/menu.png"
import open from "../../../assets/buttons/arrow-right2.png"
import addButton from "../../../assets/buttons/add-square.png"

export default function NewInternships () {
    const navigate = useNavigate();
    const goBack = ()=> {
        navigate('/')
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
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Category <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Description <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Location <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Benefits <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Intro Video <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Mentor Details <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Recommended Roles <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>
                            <img src={menu} className="menu"/>
                            <div className='insideElements'>
                                Web Links & Resources <img src={open} alt=""/>
                            </div>
                        </li>
                        <li>

                            <button className='addMore'> <img src={addButton} alt='' style={{'margin-right': '12px'}}/>Add More </button>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }

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
import Category from '../../InternshipSteps/Category/Category';
import Description from '../../InternshipSteps/Decs/Decs';
import done from "../../../assets/buttons/done-circle.png"
import Location from '../../InternshipSteps/Location/Location';
import Benefits from '../../InternshipSteps/Benefits/Benefits';
import Intro from '../../InternshipSteps/Intro/Intro';

export default function NewInternships () {
    var insideElements = "insideElements"
    var insideElementsSelected = "insideElementsSelected"
    const [catogoryDetails, setCategoyDetails] = React.useState([])
    const [location, setLocation] = React.useState('');
    const [benefits, setBenefits] = React.useState('');
    const [description, setDescription] = React.useState("")
    const [introFiles, setIntroFiles] = React.useState([]);
    const [pageType, setPageType] = React.useState("Category");
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
    const checkCategoryDetails = () => {
      if(catogoryDetails.length > 0)
      {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Category') {
                  return {...obj, isDone: true,};
                }
        
                return obj;
              }),
            );
      }
      else {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Category') {
                  return {...obj, isDone: false,};
                }
        
                return obj;
              }),
            );
      }
    }
    const checkdescriptionChanges = () => {
      if(description.length > 10)
      {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Description') {
                  return {...obj, isDone: true,};
                }
        
                return obj;
              }),
            );
      }
      else {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Description') {
                  return {...obj, isDone: false,};
                }
        
                return obj;
              }),
            );
      }
    }

    const checkLocationChanges = () => {
      if(location !== '')
      {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Location') {
                  return {...obj, isDone: true,};
                }
        
                return obj;
              }),
            );
      }
      else {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Location') {
                  return {...obj, isDone: false,};
                }
        
                return obj;
              }),
            );
      }
    }
    const checkBenefits = () => {
      if(benefits.length > 10)
      {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Benefits') {
                  return {...obj, isDone: true,};
                }
        
                return obj;
              }),
            );
      }
      else {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Benefits') {
                  return {...obj, isDone: false,};
                }
        
                return obj;
              }),
            );
      }
    }
    const checkIntroFiles = () => {
      if(introFiles.length > 0)
      {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Intro Video') {
                  return {...obj, isDone: true,};
                }
        
                return obj;
              }),
            );
      }
      else {
          setButtons(current =>
              current.map(obj => {
                if (obj.title === 'Intro Video') {
                  return {...obj, isDone: false,};
                }
        
                return obj;
              }),
            );
      }
    }
    

      React.useEffect( ()=> {
        checkCategoryDetails()
        checkdescriptionChanges()
        checkLocationChanges()
        checkBenefits()
        checkIntroFiles()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[catogoryDetails, description, location , benefits, introFiles])

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
                        {el.isDone ? <img src={done} alt="" className='done__logo'></img> : ""}
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
                        case "Location":  return <Location setLocation= {setLocation} location = {location}/>;
                        case "Benefits": return <Benefits setBenefits={setBenefits} benefits={benefits}/>
                        case "Intro Video": return <Intro setIntroFiles = {setIntroFiles} introFiles = {introFiles}/>
                        default:      return <Category/>;
                        }
                    })()}
                </div>
                
            </div>
        )
    }

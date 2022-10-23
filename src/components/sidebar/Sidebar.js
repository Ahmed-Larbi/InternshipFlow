import React from 'react';
import "./styles.css";
import Image from "../../assets/images/RadicallX-Black-Logo1.png"
import element4 from '../../assets/images/element-4.png';
import element3 from '../../assets/images/medal-star.png';
import element2 from '../../assets/images/book.png';
import element1 from '../../assets/images/briefcase.png';
import element0 from '../../assets/images/setting-2.png';
import hugPhoto from "../../assets/images/Rectangle18895.png"

export default function Sidebar() {
    return (
                <div>
                    <ul className='sidebar'>
                <li>
                        <img src={Image} alt="" className='radical-Logo'/>
                </li>    
                <li>
                    
                <div className='selected'><span className="item"><img src={element4} alt="" className="elements"/>Dashboard</span></div>
                </li>
                <li>
                <div className='selected'><span className="item"><img src={element3} alt="" className="elements"/>Apprenticeships</span></div>
                </li>
                <li>
                <div className='selected'><span className="item"><img src={element2} alt="" className="elements"/>Internships</span></div>
                </li>
                <li>

                <div className='selected'> <span className="item"><img src={element1} alt="" className="elements"/>Jobs</span> </div>
                </li>
                <li>
                <div className='selected'> <span className="item"><img src={element0} alt="" className="elements"/>Settings</span> </div>
                </li>
                <li>
                        <span className="item profile "><img src={hugPhoto} alt="" className="elements profilePhoto"/>Adam Scott</span>
                </li>
            </ul>

                </div>
    )
}
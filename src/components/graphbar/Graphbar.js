import React from 'react';
import "./Graphbar.css"
import calendar from "../../assets/images/calendar-2.png"
import funnelBar from "../../assets/images/Funnel.png"

export default function GraphBar () {
    return (
        <div className='graphbar'>
            <div className='infobar'>
                <h2> Internship Insights</h2>
                <p>   
                In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.
                </p>
            </div>
            <div className='Filterbar'>
                <div className='topbar'>
                    <button className='weekButton'>This Week</button>
                    <button className='monthButton'>This Month</button>
                    <button className='datesButton'><img src={calendar} alt=""/>Select Dates</button>
                </div>
            </div>
            <div className='funnel-bar'>
                <img src={funnelBar} alt=""/>
            </div>
        </div>
    )
}
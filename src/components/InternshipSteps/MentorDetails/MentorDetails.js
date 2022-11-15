import React from 'react'
import "./MentorDetails.css"
import button from "../../../assets/images/Rectangle18895.png"
import button2 from "../../../assets/buttons/Frame1321314699.png"
import user from "../../../assets/buttons/frame.png"
import email from "../../../assets/buttons/sms.png"
import linkedin from "../../../assets/buttons/link.png"

export default function MentorDetails(props) {
    const handleformChange = (event) => {
        const newMentorDetails = {
            'Name': '',
            'emailAddress': '',
            'Linkedin': '',
            'Picture': ''
        }
    }

    return (
    <div className="mentor__side">
    <h1> Mentor Details </h1>
        <form onChange={handleformChange}>
            <label htmlFor='picture'>
            <img src={button} alt="" className='first__image'/>
            <img src={button2} alt="" className='second__image'/>
            </label>
            <input type="file" value={props ? props.mentorDetails.Picture : ''} style={{visibility: "hidden"}} id="picture"/>


            <div className='input__class'>

                <img src={user} alt=""/>
                <input type="text" id='name' className='field' placeholder='Name' value={props.mentorDetails.Name}/>


                <img src={email} alt="" className='email__image'/>
                <input type="text" id='email' className='field' placeholder='Email Address' value={props.mentorDetails.emailAddress}/>

            </div>


            <img src={linkedin} alt="" id='linkedin__image'/>
            <input type="text" id='linkedin' className='field' placeholder='LinkedIn URL (Optional)'/>
        </form>
    </div>                   
    )
}
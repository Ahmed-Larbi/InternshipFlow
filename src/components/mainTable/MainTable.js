import React from 'react'
import "./styles.css";
import dropDown from "../../assets/images/arrow-square-down.png";
import poll from "../../assets/images/Row.png"

export default function MainTable() {

    return (
        <div className='table'>
            <table cellSpacing="0" cellPadding='0'>
                <tr>
                    <th className='header'>Internship Title<img src={dropDown} alt="" className='dropIcon'/></th>
                    <th className='header'>Complete Period<img src={dropDown} alt="" className='dropIcon'/></th>
                    <th className='header'>Total Enrolled<img src={dropDown} alt="" className='dropIcon'/></th>
                    <th className='header'> Qualified Candidates<img src={dropDown} alt="" className='dropIcon'/></th>
                    <th className='header'>..........</th>
                </tr>
                <tr>
                    <td>
                        <h4>Product Design GVI</h4>
                        <p>
                            Amet minim moliit non deserunt
                        </p>
                    </td>
                    <td>
                        <h5 className='period'>
                            120 days
                        </h5>
                        <p>
                            (created on 10/12/2021)
                        </p>
                    </td>
                    <td className='totalEnrolled'>
                        <div className='hollow'>
                        20,000
                        </div> 
                    </td>
                    <td> <img src={poll} alt=""/></td>
                </tr>
                <tr>
                <td>
                        <h4>Product Design GVI</h4>
                        <p>
                            Amet minim moliit non deserunt
                        </p>
                    </td>
                    <td>
                        <h5 className='period'>
                            120 days
                        </h5>
                        <p>
                            (created on 10/12/2021)
                        </p>
                    </td>
                    <td className='totalEnrolled'>
                        <div className='hollow'>
                        20,000
                        </div> 
                    </td>
                    <td> <img src={poll} alt=""/></td>
                </tr>
                <tr>
                    <td>
                        <h4>Product Design GVI</h4>
                        <p>
                            Amet minim moliit non deserunt
                        </p>
                    </td>
                    <td>
                        <h5 className='period'>
                            120 days
                        </h5>
                        <p>
                            (created on 10/12/2021)
                        </p>
                    </td>
                    <td className='totalEnrolled'>
                        <div className='hollow'>
                        20,000
                        </div> 
                    </td>
                    <td> <img src={poll} alt=""/></td>
                </tr>
                <tr>
                    <td>
                        <h4>Product Design GVI</h4>
                        <p>
                            Amet minim moliit non deserunt
                        </p>
                    </td>
                    <td>
                        <h5 className='period'>
                            120 days
                        </h5>
                        <p>
                            (created on 10/12/2021)
                        </p>
                    </td>
                    <td className='totalEnrolled'>
                        <div className='hollow'>
                        20,000
                        </div> 
                    </td>
                    <td> <img src={poll} alt=""/></td>
                </tr>
            </table>
        </div>
    )
}
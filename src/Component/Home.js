import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
export default function Home() {
        let fetchtime=new Date();
        let get_hour=fetchtime.getHours();
        let get_min=fetchtime.getMinutes();
        let CurrentDate=fetchtime.toDateString();
        let merge_hour_and_min=get_hour+":"+get_min;
        let pm_am=get_hour >=12?'PM':'AM';
    return (

        <div className='Home'>
                {CurrentDate}
                <p>{merge_hour_and_min} {pm_am}</p>

            <div className='New-button'>
                <div>
                    NEW
                </div>
            </div>
            <div className='Routines'>
                <NavLink to="/SetAlarm" className="navlink">
                <h2 className='WT'>Wake up Time <span > &gt;  </span></h2>
                </NavLink>
                <NavLink to="/SetAlarm" className="navlink">
                <h2 className='CT'>College Time <span > &gt;  </span> </h2>
                </NavLink>
                <NavLink to="/SetAlarm" className="navlink">
                <h2 className='LT'>Lunch Time   <span > &gt;  </span> </h2>
                </NavLink>
                <NavLink to="/SetAlarm" className="navlink">
                <h2 className='RT'>Relax Time   <span > &gt;  </span> </h2>
                </NavLink>
                <NavLink to="/SetAlarm" className="navlink">
                <h2 className='BT'>Bed Time     <span > &gt;  </span> </h2>
                </NavLink>
            </div>
        </div>
    )
}
// bed time lunch time Wake up, college time, Relax time 

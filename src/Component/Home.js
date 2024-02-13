import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import SetAlarm from './SetAlarm.js';
import './style.css'
export default function Home() {
    const [time, settime] = useState("17:44")
console.log(time);


useEffect(()=>{
    const Time = () => {
        let fetchtime=new Date();
        let get_hour=fetchtime.getHours();
        let get_min=fetchtime.getMinutes();
        let merge_hour_and_min=get_hour+":"+get_min;
        if (merge_hour_and_min===time){
            alert("alaram")
        }
    }
    
    Time();
},[time])
    return (

        <div className='Home'>
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

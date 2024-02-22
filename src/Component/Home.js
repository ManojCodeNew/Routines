import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
export default function Home() {
    const [value, setvalue] = useState({
        final_time: [],
    });
    const handle_submit = () => {
        let hour_input = document.getElementById('set_hour');
        let min_input = document.getElementById('set_min');
        setvalue(prevalue=>({
            ...value,
            final_time:[...prevalue.final_time,hour_input.value+" : "+min_input.value]

        })
        )
    }
console.log("ft",value.final_time);


    
    const [time, setTime] = useState()
let Add_alarm_container=[]
    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let get_hour = fetchtime.getHours();
            let get_min = fetchtime.getMinutes();
            let merge_hour_and_min = get_hour + " : " + get_min;
            let pm_am = get_hour >= 12 ? 'PM' : 'AM';

            setTime(merge_hour_and_min + " " + pm_am)
        }, 1000)

Add_alarm_container.push(value.final_time)
    }, [time,value.final_time])

console.log(Add_alarm_container);
    return (
        <>
            <div className='Home'>
                {/* {CurrentDate} */}
                <p>{time}</p>

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
        {value.final_time.forEach(item=>{

            <h3 >{item}</h3>
        })}

            
            <div className='set_alarm_container'>
                <input type="number" id='set_hour' />
                <input type="number" id='set_min' />
                <button id='submit' onClick={handle_submit}>submit</button>

            </div>
        </>
    )
}
// bed time lunch time Wake up, college time, Relax time 

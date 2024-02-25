import React, { useEffect, useState } from 'react';
import audio1 from './Audios/Ringtone.mp3'
// import { NavLink } from 'react-router-dom';
import './style.css'
export default function Home() {
    const [time, setTime] = useState(null)
    const [value, setvalue] = useState([])
    const [label, setlabel] = useState([]);

    let alertUser = () => {
        let alarm = new Audio(audio1);
        alarm.play();
    }

    let displayNotification = async (time, key) => {
        if ("Notification" in window) {
            let permission = await Notification.requestPermission();
            if (permission === "granted") {
                new Notification('alert', { body: `Alarm :${time} 
                label : ${label[key]}` });
                alertUser();
            }
            else {
                alert("Not Supported");
            }

        }
    }

    const handle_submit = () => {
        let hour_input = document.getElementById('set_hour');
        let min_input = document.getElementById('set_min');
        let label_input = document.getElementById('label');
        let pm_am = hour_input.value >= 12 ? " PM" : " AM";
        setlabel([...label, label_input.value])
        setvalue(
            // ...spread operator
            [...value, hour_input.value + " : " + min_input.value + pm_am]
        )
    }
    console.log("label", label);
    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let get_hour = fetchtime.getHours();
            let get_min = fetchtime.getMinutes();
            let merge_hour_and_min = get_hour + " : " + get_min;
            let pm_am = get_hour >= 12 ? 'PM' : 'AM';

            setTime(merge_hour_and_min + " " + pm_am)
        }, 1000)
    }, [])
    useEffect(() => {
        let finded_data = value.filter((item) => item === time)

        value.forEach((data, key) => {
            if (data === finded_data[0]) {
                // console.log("key",label[key]);



                // console.log("finded_data", index);
                if (time === finded_data[0]) {
                    // eslint-disable-next-line
                    displayNotification(time, key);

                }
            }
        })
    }, [time, value])
    return (
        <>
            <div className='Home'>


                <p>{time}</p>
            </div>
            {/* // eslint-disable-next-line */}

            {value.map((Value_item, key) => <div id='Alarm_container'> <h1 className='Alarm'>{Value_item}</h1>
                <p id={label[key]} className='label'>{label[key]}</p>
            </div>
            )}







            <div className='set_alarm_container'>
                <input placeholder="Enter Your Label" id='label' /><br />
                <input type="number" id='set_hour' />
                <input type="number" id='set_min' />
                <button id='submit' onClick={handle_submit}>submit</button>

            </div>
        </>
    )
}
// bed time lunch time Wake up, college time, Relax time 

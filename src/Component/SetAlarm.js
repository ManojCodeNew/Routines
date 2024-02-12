import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState();
    const [data, setdata] = useState("22:17")
    const [alarm, setalarm] = useState({
        active: false,
        alarm_hour: 0,
        alarm_min: 0,
        final_time: 0
    })
    
    const Alarm_time = () => {
            setalarm({
                final_time: alarm.alarm_hour + ":" + alarm.alarm_min
            })
    }

    const setHour=(e)=>{
        setalarm({...alarm,alarm_hour : e.target.value})
        console.log("Hour",alarm.alarm_hour);
    }

    const setMin=(event)=>{
        setalarm({...alarm,alarm_min : event.target.value})
        console.log("Min",alarm.alarm_min);

    }

    console.log("final time outside", alarm.final_time);
    // const [Alarm, setAlarm_time] = useState(0)

    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let time = fetchtime.getHours() + ":" + fetchtime.getMinutes();
            setCount(time)
        }, 1000)
        console.log('I am useEffect', count);
        console.log("Final_time", alarm.final_time);
        if (count === alarm.final_time) {
            alert("Alarm!!!");
        }

    }, [count, alarm.final_time]);
    return (
        <div>
            <p>Current Time: {count}</p>
            <div >
                <input id="Hour" type='number' value={alarm.alarm_hour} onChange={setHour} ></input>
                :
                <input id='Min' type='number' value={alarm.alarm_min} onChange={setMin}></input>
            </div>
            <button onClick={Alarm_time}>Ok</button>
            <h1>{alarm.final_time}</h1>
        </div>
    );
}

export default ExampleComponent;

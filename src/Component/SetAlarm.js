import React, { useState, useEffect, useRef } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState();
    const [data, setdata] = useState("22:17")
    const [alarm_active, setAlarm_active] = useState({
        active: false,
        alarm_hour: 0,
        alarm_min: 0
    })
    const [Alarm, setAlarm_time] = useState(0)

    let hour = useRef();
    let min = useRef();
    const setAlarm = () => {
        // Check alarm Active
        if (alarm_active.active === false) {
            setAlarm_active({ active: true })
        }
        else {
            setAlarm_active({ active: false })
        }
        
    }
    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let time = fetchtime.getHours() + ":" + fetchtime.getMinutes();
            setCount(time)
        }, 1000)
        console.log('I am useEffect', count);
        if (count === data) {
            alert("Alert!!!");
        }
        
    }, [count, data]);
    return (
        <div>
            <p>Current Time: {count}</p>
            <button onClick={setAlarm}>Set Alarm</button>
            {alarm_active.active === true ?
                <div><input id="Hour" ref={hour} type='number'></input>  :  <input id='Min' ref={min} type='number'></input></div> : "Sorry Not available"}
        </div>
    );
}

export default ExampleComponent;

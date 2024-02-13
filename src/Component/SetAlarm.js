import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import audio1 from '../Component/Audios/Ringtone.mp3'

function ExampleComponent() {
    const [count, setCount] = useState();
    const [alarm, setalarm] = useState({
        active: false,
        alarm_hour: 0,
        alarm_min: 0,
        final_time: []
    })

    const add_Alarm = async () => {
        setalarm(prevState => ({
            ...alarm,
            final_time: [...prevState.final_time, alarm.alarm_hour + ":" + alarm.alarm_min]
        }));

    }
    const Add_alarm_container = [alarm.final_time]

    const setHour = (e) => {
        setalarm({ ...alarm, alarm_hour: e.target.value })
        console.log("Hour", alarm.alarm_hour);
    }

    const setMin = (event) => {
        setalarm({ ...alarm, alarm_min: event.target.value })
        console.log("Min", alarm.alarm_min);

    }

    console.log("final time outside", alarm.final_time);

    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let time = fetchtime.getHours() + ":" + fetchtime.getMinutes();
            setCount(time)
        }, 1000)
        console.log('I am useEffect', count);
        console.log("Final_time", alarm.final_time);

        // This is most important because it find which is next alarm
        let Finded_alarm=Add_alarm_container[0].filter((item)=>item===count)
        console.log("Finded_alarm",Finded_alarm[0]);
        if (count === Finded_alarm[0]) {
            new Notification('alert' , {body:"Your alaram is Going on"});
            let alarm=new Audio(audio1)
            alarm.play();
            
        }
        

    }, [count, alarm.final_time]);
    return (
        <div>
            <div><h1 className='add_alarm_heading'>Alarm</h1><hr />
            {/* Added Elements printing one by one */}
            {Add_alarm_container[0].map((item)=><h1 className='add_alarm_data'>{item}</h1>)}
            </div>
            <hr />
            <p>Current Time: {count}</p>
            <div >
                <input id="Hour" type='number' value={alarm.alarm_hour} onChange={setHour} ></input>
                :
                <input id='Min' type='number' value={alarm.alarm_min} onChange={setMin}></input>
            </div>
            <button onClick={add_Alarm}>Ok</button>
        </div>
    );
}

export default ExampleComponent;

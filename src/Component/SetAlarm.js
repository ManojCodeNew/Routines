import React, { useState, useEffect, useContext } from 'react';
import { Globaldata } from '../Context/Context';


function SetAlarm(props) {
    const [Time, setTime] = useState();
    const [alarm, setalarm] = useState({
        active: false,
        alarm_hour: 1,
        alarm_min: 0,
        final_time: []
    })
    let Globaldata_access=useContext(Globaldata);

    


    const add_Alarm = () => {
        setalarm(prevState => ({
            ...alarm,
            final_time: [...prevState.final_time, alarm.alarm_hour + ":" + alarm.alarm_min]
        }));

    }
    // Saved Alarms
    const Add_alarm_container = [alarm.final_time]
console.log("Saved Alarms",Add_alarm_container);
    const setHour = (e) => {
        setalarm({ ...alarm, alarm_hour: e.target.value })
    }

    const setMin = (event) => {
        setalarm({ ...alarm, alarm_min: event.target.value })
    }

    console.log("final time outside", alarm.final_time);
    useEffect(() => {
        setInterval(() => {
            let fetchtime = new Date();
            let time = fetchtime.getHours() + ":" + fetchtime.getMinutes();
            setTime(time)
        }, 1000)
        

        // This is most important because it find which is next alarm
        let Finded_alarm=Add_alarm_container[0].filter((item)=>item===Time)
            Globaldata_access.setalarm_time(Finded_alarm[0])
        //     Globaldata_access.setCurrent_time(count)
        //     Globaldata_access.setsaved_Alarm(Add_alarm_container)
// eslint-disable-next-line
    }, [ alarm.final_time,Add_alarm_container[0],Globaldata_access]);
    return (
        <div>
            <div><h1 className='add_alarm_heading'>Alarm</h1><hr />
            {/* Added Elements printing one by one */}
            {Add_alarm_container[0].map((item)=><h1 className='add_alarm_data'>{item}</h1>)}
            </div>
            <hr />
            <p>Current Time: {Time}</p>
            <div >
                <input id="Hour" type='number' value={alarm.alarm_hour} onChange={setHour} ></input>
                :
                <input id='Min' type='number' value={alarm.alarm_min} onChange={setMin}></input>
            </div>
            <button onClick={add_Alarm}>Ok</button>
        </div>
    );
}

export default SetAlarm;

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState();
    // const [addAlarm,setaddalarm]=useState();
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
    console.log("addAlarm", Add_alarm_container);
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
        if (count === alarm.final_time) {
            alert("Alarm!!!");
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

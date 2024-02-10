import React, { useState, useEffect } from 'react';

function AlarmClock() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        let time = currentTime.getHours() + ":" + currentTime.getMinutes();
        if (alarmTime == time) {
            alert("alaram")
        }
    }, [currentTime, alarmTime]);

    const handleSetAlarm = () => {
        const hours = parseInt(prompt('Enter the hour for the alarm (0-23):'));
        // const minutes = parseInt(prompt('Enter the minutes for the alarm (0-59):'));

        setAlarmTime(hours)
    };

    return (
        <div>
            <h1>Alarm Clock</h1>
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
            <button onClick={handleSetAlarm}>Set Alarm</button>
        </div>
    );
}

export default AlarmClock;

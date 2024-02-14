import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import SetAlarm from './Component/SetAlarm'
import { Route, Routes } from 'react-router-dom';
import { Globaldata } from './Context/Context';
import { useContext } from 'react';
import audio1 from './Component/Audios/Ringtone.mp3'


function App() {
  const Globaldata_access=useContext(Globaldata);

  let alertUser=()=>{
    let alarm = new Audio(audio1)
    alarm.play();
}
let displayNotification= async()=>{
if ("Notification" in window) {
    let permission = await Notification.requestPermission();
    if (permission === "granted") {
        new Notification('Alarm', { body:"  Bed Time start" });
        alertUser();

    } else {
        console.log("Not Support");
    }

}
}
if (Globaldata_access.current_time===Globaldata_access.alarm_time ) {
displayNotification();
  
}
console.log("Global",Globaldata_access);
  // if (condition) {
    
  // }
  return (
    <div>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SetAlarm' element={<SetAlarm/>}></Route>

      </Routes>
    </div>
  );
}

export default App;

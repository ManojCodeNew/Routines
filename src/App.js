import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import SetAlarm from './Component/SetAlarm'
import { Route, Routes } from 'react-router-dom';
import { Globaldata } from './Context/Context';
import { useContext } from 'react';
import audio1 from './Component/Audios/Ringtone.mp3'


function App() {
  const Globaldata_access = useContext(Globaldata);
  let CurrentTime = Globaldata_access.current_time;
  let AlarmTime = Globaldata_access.alarm_time;
  let saved_Alarm_in_Context = Globaldata_access.saved_Alarm;
  let setSavedAlarm = []
console.log("saved_Alarm_in_Context",saved_Alarm_in_Context);
  let reqiredData=localStorage.getItem("savedItems")
  if (reqiredData) {
    alert("required")
    setSavedAlarm = [JSON.parse(localStorage.getItem("savedItems"))]
  }
  else {
    alert("Not required")
    localStorage.setItem("savedItems",JSON.stringify(saved_Alarm_in_Context[0]))
  }
  // localStorage.setItem("savedItems",JSON.stringify(saved_Alarm_in_Context[0]))
  // let setSavedAlarm = [JSON.parse(localStorage.getItem("savedItems"))]
console.log("Localstotrage",setSavedAlarm);
let alertUser = () => {
  let alarm = new Audio(audio1)
  // eslint-disable-next-line
  alarm.play();
}
let displayNotification = async () => {
  if ("Notification" in window) {
    let permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification('Alarm', { body: `${AlarmTime}` + " Bed Time start" });
      let alarm_btn = document.createElement('div');
      alarm_btn.onclick = alertUser;
      alarm_btn.click();
    } else {
      console.log("Not Support");
    }

  }
}

// console.log("Saved",savedAlarms);
if (CurrentTime === AlarmTime) {
  displayNotification();
}

return (
  <div>
    <Navbar />
    <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/SetAlarm' element={<SetAlarm />}></Route>

    </Routes>
    {/* {savedAlarms} */}
  </div>
);

}
export default App;

import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
// import SetAlarm from './Component/SetAlarm'
import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { Globaldata } from './Context/Context';
// import { useContext } from 'react';
// import audio1 from './Component/Audios/Ringtone.mp3'


function App() {
//   const Globaldata_access = useContext(Globaldata);
// //   // let CurrentTime = Globaldata_access.current_time;
//   let AlarmTime = Globaldata_access.alarm_time;
// let localStorage_data=localStorage.getItem('saved_datas')
// if (localStorage_data) {
//   alert("data Found")
//   JSON.parse(localStorage.getItem('saved_datas'))
//   console.log("local_Data",localStorage_data);
// }else{
//   alert("Not Found")
//   localStorage.setItem('saved_datas',AlarmTime)
// }
//   let saved_Alarm_in_Context = Globaldata_access.saved_Alarm;

//   let [CurrentTime,setCurrentTime]=useContext();
//   let setSavedAlarm = []

//   useEffect(()=>{
//     const current_time=new Date().toLocaleTimeString();
//     setCurrentTime(current_time)
//   })
// // console.log("saved_Alarm_in_Context",saved_Alarm_in_Context);
//   let reqiredData=localStorage.getItem("savedItems")
//   if (reqiredData!=="undefined") {
//     alert("required")
//     setSavedAlarm = [JSON.parse(localStorage.getItem("savedItems"))]
//   }
//   else {
//     alert("Not required")
//     localStorage.setItem("savedItems",JSON.stringify(saved_Alarm_in_Context[0]))
//   }
//   // localStorage.setItem("savedItems",JSON.stringify(saved_Alarm_in_Context[0]))
//   // let setSavedAlarm = [JSON.parse(localStorage.getItem("savedItems"))]
// console.log("Localstotrage",setSavedAlarm);
// let alertUser = () => {
//   let alarm = new Audio(audio1)
//   // eslint-disable-next-line
//   alarm.play();
// }
// let displayNotification = async () => {
//   if ("Notification" in window) {
//     let permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       // eslint-disable-next-line
//       new Notification('Alarm', { body: " Bed Time start" });
//       let alarm_btn = document.createElement('div');
//       alarm_btn.onclick = alertUser;
//       alarm_btn.click();
//     } else {
//       console.log("Not Support");
//     }

//   }
// }

// if (CurrentTime=== AlarmTime) {
//   displayNotification();
// }
// const [CTime,setCtime]=useState()
// useEffect(()=>{
//   setInterval(()=>{
//     let Current_Time=new Date();
//     let merge_hour_and_min=Current_Time.getHours()+":"+Current_Time.getMinutes();
//     // let set_PM_AM=merge_hour_and_min>=12?"AM":"PM";
//     setCtime(merge_hour_and_min)
//   },5000)
//   console.log();
//   if (CTime===AlarmTime) {
//     alert("CTime")
//    console.log("alarm");
//   }

// },[CTime,AlarmTime])


return (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path='/SetAlarm' element={<SetAlarm />}></Route> */}

    </Routes>
    {/* <div>This is Current Time :{CTime}</div> */}
  </div>
);

}
export default App;

// import React, { useContext } from 'react';
// import audio1 from '../Component/Audios/Ringtone.mp3'
// import SetAlarm from './SetAlarm';
// import { Globaldata } from '../Context/Context';

// export default function Notification_Section() {
//     let Globaldata_access=useContext(Globaldata);

// // eslint-disable-next-line
//     let alertUser = () => {
//         let alarm = new Audio(audio1)
//         alarm.play();
//         // console.log(alarm.play());
//     }
//     let ms='hdg'
//     let displayNotification = async () => {

//         if ("Notification" in window) {
//             let permission = await Notification.requestPermission();
//             if (permission === "granted") {
//                 new Notification('alert', { body: "Your alaram is Going on" });
//                 alertUser();

//             } else {
//                 console.log("Not Support");
//             }

//         }
//     }
//     Globaldata_access.setnotify_fun(displayNotification);
//     return (
//         <div>
//         </div>
//     )
// }


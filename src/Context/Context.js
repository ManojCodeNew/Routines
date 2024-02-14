import React, { useState } from 'react'
import { createContext } from 'react'
let Globaldata = createContext();
export default function ContextFun({ children }) {
    const [current_time, setCurrent_time] = useState();
    const [alarm_time,setalarm_time]= useState();
    console.log(current_time);
    return (
        <Globaldata.Provider value={{ current_time, setCurrent_time,alarm_time,setalarm_time }}>
            {children}
        </Globaldata.Provider>
    )
}
export { Globaldata };

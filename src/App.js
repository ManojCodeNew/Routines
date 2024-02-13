import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import SetAlarm from './Component/SetAlarm'
import Notification from './Component/Notification.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SetAlarm' element={<SetAlarm/>}></Route>

      </Routes>
<Notification/>
    </div>
  );
}

export default App;

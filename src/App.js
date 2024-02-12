import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import SetAlarm from './Component/SetAlarm'
import { Route, Routes } from 'react-router-dom';

function App() {
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

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_EVENTS);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(events);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home events={events}/>} />
        <Route path='/add-event' element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Signup from './pages/Signup';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [update, setUpdate] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    name: "",
    email: "",
  })

  const getEvents = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_EVENTS);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents()
  }, [update]);

  const filteredEvents = events.filter(event => {
    const eventCity = event.location.city;
    const eventMonth = new Date(event.eventDate).toLocaleString('default', { month: 'long' });

    const cityMatch = selectedCity ? eventCity === selectedCity : true;
    const monthMatch = selectedMonth ? eventMonth === selectedMonth : true;

    return cityMatch && monthMatch;
  });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home events={filteredEvents} setSelectedCity={setSelectedCity} setSelectedMonth={setSelectedMonth} />} />
        <Route path='/add-event' element={<AddEvent setUpdate={setUpdate} />} />
        <Route path='/signup' element={<Signup setRegisteredUser={setRegisteredUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

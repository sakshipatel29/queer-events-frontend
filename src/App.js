// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import AddEvent from './pages/AddEvent';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [events, setEvents] = useState([]);

//   const getEvents = async () => {
//     try {
//       const res = await axios.get(process.env.REACT_APP_EVENTS);
//       setEvents(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   console.log(events);

//   useEffect(() => {
//     getEvents();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home events={events}/>} />
//         <Route path='/add-event' element={<AddEvent />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [update, setUpdate] = useState(false);

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

  // Filter events by selected city and month
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

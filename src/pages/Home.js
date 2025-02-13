// import React from 'react'
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import EventSchedule from '../components/Events/Display/EventSchedule';

// const Home = ({events}) => {
//   return (
//     <div>
//         <Navbar />
//         <Hero />
//         <EventSchedule events={events} />
//     </div>
//   )
// }

// export default Home;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventSchedule from "../components/Events/Display/EventSchedule";

const Home = ({ events }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <div>
      <Navbar />
      <Hero setSelectedCity={setSelectedCity} setSelectedMonth={setSelectedMonth} />
      <EventSchedule events={events} selectedCity={selectedCity} selectedMonth={selectedMonth} />
    </div>
  );
};

export default Home;

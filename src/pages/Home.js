import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventSchedule from '../components/Events/Display/EventSchedule';

const Home = ({ events, setSelectedCity, setSelectedMonth }) => {
  return (
    <div>
      <Navbar />
      <Hero setSelectedCity={setSelectedCity} setSelectedMonth={setSelectedMonth} />
      {events.length > 0 ? (
        <EventSchedule events={events} />
      ) : (
        <p>No events found for the selected criteria.</p>
      )}
    </div>
  );
};

export default Home;

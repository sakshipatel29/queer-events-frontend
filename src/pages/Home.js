import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventSchedule from '../components/Events/Display/EventSchedule';

const Home = ({events}) => {
  return (
    <div>
        <Navbar />
        <Hero />
        <EventSchedule events={events} />
    </div>
  )
}

export default Home;
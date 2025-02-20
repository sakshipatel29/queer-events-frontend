import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventSchedule from "../components/Events/Display/EventSchedule";
import "./Home.css";

const Home = ({ events, setSelectedCity, setSelectedMonth }) => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero setSelectedCity={setSelectedCity} setSelectedMonth={setSelectedMonth} />
      {events.length > 0 ? (
        <EventSchedule events={events} />
      ) : (
        <p className="no-events-message">No events found for the selected criteria.</p>
      )}
    </div>
  );
};

export default Home;

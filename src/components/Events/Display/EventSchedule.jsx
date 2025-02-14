import React from "react";
import EventCard from "./EventCard";

const EventSchedule = ({ events, selectedCity, selectedMonth }) => {
  const filteredEvents = events.filter(event => {
    const eventMonth = new Date(event.eventDate).toLocaleString("en-US", { month: "long" });
    return (
      (!selectedCity || event.city === selectedCity) &&
      (!selectedMonth || eventMonth === selectedMonth)
    );
  });

  return (
    <div>
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))
      ) : (
        <p>No events found {selectedCity ? `in ${selectedCity}` : ""} {selectedMonth ? `for ${selectedMonth}` : ""}</p>
      )}
    </div>
  );
};

export default EventSchedule;

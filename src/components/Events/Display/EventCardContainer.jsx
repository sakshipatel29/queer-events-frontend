import React from "react";
import EventCard from "./EventCard"; // Assuming EventCard component is in the same directory

const EventCardContainer = ({ events }) => {
  return (
    <div className="event-card-container">
      {events.map(event => (
        <EventCard
          key={event._id}
          organisationName={event.organisationName}
          eventName={event.eventName}
          description={event.description}
          eventDate={event.eventDate}
          startTime={event.startTime}
          endTime={event.endTime}
          location={event.location}
          eventURL={event.eventURL}
          price={event.price}
        />
      ))}
    </div>
  );
};

export default EventCardContainer;

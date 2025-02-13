import React from 'react'
import EventCard from './EventCard';

const EventSchedule = ({events}) => {
  return (
    <div>
      <div>
        <h3>{new Date().toLocaleString("default",{ month: "long", year: "numeric" })}</h3>
        {/* to add dropdown here */}
        <h4>Month</h4>
      </div>
        {events.map(item => 
            <EventCard 
                key = {item._id}
                organisationName = {item.organisationName}
                eventName = {item.eventName}
                description={item.description}
                eventDate = {item.eventDate}
                startTime = {item.startTime}
                endTime = {item.endTime}
                addressLine1 = {item.location.addressLine1}
                addressLine2 = {item.location.addressLine2}
                city = {item.location.city}
                postcode = {item.location.postcode}
                eventURL = {item.eventURL}
                price = {item.price}
            />
        )}
    </div>
  )
}

export default EventSchedule;
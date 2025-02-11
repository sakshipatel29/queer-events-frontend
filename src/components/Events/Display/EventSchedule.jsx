import React from 'react'
import EventCard from './EventCard';

const EventSchedule = ({events}) => {
  return (
    <div>
        {events.map(item => 
            <EventCard 
                key = {item._id}
                organisationName = {item.organisationName}
                eventName = {item.eventName}
                description={item.description}
                eventDate = {item.eventDate}
                startTime = {item.startTime}
                endTime = {item.endTime}
                addressLine1 = {item.addressLine1}
                addressLine2 = {item.addressLine2}
                city = {item.city}
                postcode = {item.postcode}
                eventURL = {item.eventURL}
                price = {item.price}
            />
        )}
    </div>
  )
}

export default EventSchedule;
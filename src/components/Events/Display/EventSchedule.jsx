// import { React } from "react";
// import { BsCaretDownFill } from "react-icons/bs";
// import EventCard from "./EventCard";

// const EventSchedule = ({ events }) => {
//   const eventsThisMonth = [];
//   const futureEvents = [];

//   events.map((item) => {
//     const currentMonth = new Date().getMonth();
//     const currentYear = new Date().getFullYear();
//     const itemMonth = new Date(item.eventDate).getMonth();
//     const itemYear = new Date(item.eventDate).getFullYear();
//     if (itemMonth + itemYear === currentMonth + currentYear) {
//       eventsThisMonth.push(item);
//     }
//     if ( itemYear >= currentYear && itemMonth > currentMonth){
//       futureEvents.push(item);
//     }
//   });

//   return (
//     <div>
//       <div>
//         <h3>
//           {new Date().toLocaleString("default", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h3>
//         {/* to add dropdown here */}
//         <h4>Month</h4>
//         <BsCaretDownFill />
//       </div>
//       <div>
//         {new Date().toLocaleString("default", {
//           weekday: "short",
//           day: "numeric",
//           month: "short",
//         })}
//       </div>
//       <div>
//       {eventsThisMonth.length !== 0 ? (
//         <div>
//         {eventsThisMonth.map((item) => (
//         <EventCard
//           key={item._id}
//           organisationName={item.organisationName}
//           eventName={item.eventName}
//           description={item.description}
//           eventDate={item.eventDate}
//           startTime={item.startTime}
//           endTime={item.endTime}
//           addressLine1={item.location.addressLine1}
//           addressLine2={item.location.addressLine2}
//           city={item.location.city}
//           postcode={item.location.postcode}
//           eventURL={item.eventURL}
//           price={item.price}
//         />
//         ))}
//         </div>
//       ) : (
//         <div>
//           <p>There are no events this month!</p>
//         </div>
//       )}
//       </div>
//       <div>
//         <h2>Upcoming events:</h2>
//         {futureEvents.length !== 0 && 
//           <div>
//         {futureEvents.map((item) => (
//         <EventCard
//           key={item._id}
//           organisationName={item.organisationName}
//           eventName={item.eventName}
//           description={item.description}
//           eventDate={item.eventDate}
//           startTime={item.startTime}
//           endTime={item.endTime}
//           addressLine1={item.location.addressLine1}
//           addressLine2={item.location.addressLine2}
//           city={item.location.city}
//           postcode={item.location.postcode}
//           eventURL={item.eventURL}
//           price={item.price}
//         />
//       ))}
//         </div>
//         }
//       </div>
      
//     </div>
//   );
// };

// export default EventSchedule;



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

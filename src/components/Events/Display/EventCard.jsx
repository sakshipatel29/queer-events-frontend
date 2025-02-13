import React, { useState } from 'react';
import './EventCard.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const EventCard = ({ organisationName, eventName, description, eventDate, startTime, endTime, addressLine1, addressLine2, city, postcode, eventURL, price }) => {

    const [openmodal, setOpenModal] = useState(false);
    const date = new Date(eventDate).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

    let capitaliseText = eventName.split(" ");
    for (let i = 0; i < capitaliseText.length; i++) {
        capitaliseText[i] = capitaliseText[i][0].toUpperCase() + capitaliseText[i].substring(1);
    };

    const title = capitaliseText.join(" ").trim();

    return (
        <div className="event-card">
            <div className="price">
                {price === 0 ? "Free" : `$${price}`}
            </div>
            <div className="event-header">
                <h3 className="event-title">{title}</h3>
            </div>
            <div className="event-description">
                <div onClick={()=> setOpenModal(true)}>
                {openmodal ? ( <><div onClick={() => setOpenModal(false)}><p>See Description</p> <AiOutlineUp /></div></>) : (<><div onClick={() => setOpenModal(true)}><p>See Description</p> <AiOutlineDown /></div></>)}
                </div>
                {openmodal && <p>{description}</p>}
            </div>           
            <div className="event-location">
                <p>{addressLine1}</p>
                <p>{addressLine2}</p>
                <p>{city}, {postcode}</p>
            </div>
            <div className="event-dates-time">
                <p>{organisationName}</p>
                <p>{date}</p>
                <p>{startTime} - {endTime}</p>
            </div>
            <div className="event-url">
                <a href={eventURL} target="_blank" rel="noopener noreferrer">View Event</a>
            </div>
        </div>
    )
}

export default EventCard;
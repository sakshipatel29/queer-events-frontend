import React from 'react'

const EventCard = ({ organisationName, eventName, description, eventDate, startTime, endTime, addressLine1, addressLine2, city, postcode, eventURL, price }) => {
    
    const date = new Date(eventDate).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric"});

    let capitaliseText = eventName.split(" ");
    for( let i = 0; i < capitaliseText.length; i++){
        capitaliseText[i] = capitaliseText[i][0].toUpperCase() + capitaliseText[i].substring(1);
    };

    const title = capitaliseText.join(" ").trim();

    return (
        <div>
            <div>
                <p>{price === 0 ? (<p>Free</p>) : (<p>${price}</p>)}</p>
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{addressLine1}</p>
                <p>{addressLine2}</p>
                <p>{city}</p>
                <p>{postcode}</p>
            </div>
            <div>
                <p>{organisationName}</p>
                <p>{date}</p>
                <p>{startTime} - {endTime}</p>
            </div>
            <div>
                <p>{eventURL}</p>
            </div>
        </div>
    )
}

export default EventCard
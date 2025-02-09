import React, { useState } from 'react';
import './AddEventForm.css';

const AddEventForm = () => {
    const [eventInput, setEventInput] = useState({
        eventName: "",
        description: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postcode: "",
        eventURL: "",
        price: 0,
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setEventInput({
            ...eventInput,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventInput);
        // Logic for form submission goes here
    };

    return (
        <div className="add-event-container">
            <div className="form-header">
                <h1>Add a New Event</h1>
            </div>
            <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <input
                        id="eventName"
                        name="eventName"
                        type="text"
                        placeholder="Event name"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Brief Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Event description"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="time-group">
                    <div className="form-group">
                        <label htmlFor="startTime">Start Time</label>
                        <input
                            id="startTime"
                            name="startTime"
                            type="time"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endTime">End Time</label>
                        <input
                            id="endTime"
                            name="endTime"
                            type="time"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="address-group">
                    <label>Address</label>
                    <input
                        id="addressLine1"
                        name="addressLine1"
                        type="text"
                        placeholder="Address Line 1"
                        required
                        onChange={handleInput}
                    />
                    <input
                        id="addressLine2"
                        name="addressLine2"
                        type="text"
                        placeholder="Address Line 2"
                        required
                        onChange={handleInput}
                    />
                    <div className="city-postcode-group">
                        <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="City/Town"
                            required
                            onChange={handleInput}
                        />
                        <input
                            id="postcode"
                            name="postcode"
                            type="number"
                            placeholder="Postcode"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eventURL">Event Registration Link</label>
                    <input
                        id="eventURL"
                        name="eventURL"
                        type="url"
                        placeholder="Event URL link"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group price-group">
                    <label htmlFor="price">Price</label>
                    <div className="price-input-group">
                        <span className="currency-sign">$</span>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            placeholder="5"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <p>Enter 0 if event is free</p>
                </div>
                <div className="form-group submit-group">
                    <button type="submit" className="submit-btn">Add Event</button>
                </div>
            </form>
        </div>
    );
};

export default AddEventForm;

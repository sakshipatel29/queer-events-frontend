import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './Signup.css';

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleInput = (e) => { 
        const { name, value} = e.target;
        setUser({
            ...user,
            [name] : value,
        })
    };
    return (
        <div className="signup-container">
            <Navbar />
            <div className="signup-form">
                <h3 className="signup-header">Sign Up Here</h3>
                <p className="signup-description">
                    If not an organizer, enter your name to appear alongside the event you may want to share.
                </p>
                <form>
                    <div>
                        <label>Name of Organisation:</label>
                        <input
                            id="username"
                            name="name"
                            type="text"
                            placeholder="Sakshi Patel"
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div>
                        <label>Email Address:</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="abc@example.com"
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="**********"
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div>
                        <button className="signup-button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

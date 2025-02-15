import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleInput = (e) => { 
        const { name, value} = e.target();
        setUser({
            ...user,
            [name] : value,
        })
    };
    return (
        <div>
            <Navbar />
            <div>
                <form>
                    <div>
                        <h3>Sign Up here</h3>
                    </div>
                    <div>
                        <label>Name of Organisation:</label>
                        <p>If not an organisor, individual's name to appear alongside the event you may want to share</p>
                        <input
                            id="username"
                            name="username"
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
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

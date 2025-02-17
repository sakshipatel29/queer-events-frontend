import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtomState } from "../atoms/userAtom";

const Signup = ({setRegisteredUser}) => {

    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [userStateValue, setUserStateValue] = useRecoilState(userAtomState);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = (e) => { 
        const { name, value} = e.target;
        setNewUser({
            ...newUser,
            [name] : value,
        })
    };

    const checkErrors = () => {
        const { name, email, password } = newUser;

        if(name === ""){
            setErrorMessage("Please enter name!");
        }

        if(email.length < 8){
            setErrorMessage("Please enter valid email address!");
        }
        if(password.length < 8){
            setErrorMessage("Please enter password of length at least 8 characters.");
        }
        if(email.length < 8 && password.length < 8){
            setErrorMessage("Please enter email and password of length at least 8.")
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password} = newUser;

        checkErrors();

        if( name !== "" && email.length >= 8 && password.length >= 8 ){
            setErrorMessage("");
            try {
                const res = await axios.post(process.env.REACT_APP_SIGNUP, newUser);
                if(res.data.message === "Success!!"){
                    setUserStateValue({
                        name: name,
                        email: email,
                    })(res.data.message);
                    navigate("/add-event");
                }
                // setRegisteredUser({
                //     name: name,
                //     email: email,
                // })
                navigate("/add-event");
                if(res.status === 200){
                    console.log("Success!!");
                } 
            } catch (error) {
                console.log(error);
            }
        }else{
            setErrorMessage("Please ensure all fields have valid values.");
        }
    }

    return (
        <div className="signup-container">
            <Navbar />
            <div className="signup-form">
                <h3 className="signup-header">Sign Up Here</h3>
                <p className="signup-description">
                    If not an organizer, enter your name to appear alongside the event you may want to share.
                </p>
                <form method="POST">
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
                    {errorMessage && <p>{errorMessage}</p>}
                    <div>
                        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

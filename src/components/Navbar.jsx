import React from 'react';
import { MdAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleAddEvent = () => {
        navigate("/add-event");
    }

    return (
        <div className="navbar-container">
            <p className="navbar-title">Queer RSEA Events</p>
            <div className="icon-container">
                <MdAdd onClick={handleAddEvent} />
            </div>
        </div>
    );
}

export default Navbar;

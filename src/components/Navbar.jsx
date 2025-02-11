import React from 'react';
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleAddEvent = () => {
        navigate("/add-event");
    }

    return (
        <div className="navbar-container">
            <Link to="/">
            <p className="navbar-title">Queer RSEA Events</p>
            </Link>
            <div className="icon-container">
                <MdAdd onClick={handleAddEvent} />
            </div>
        </div>
    );
}

export default Navbar;

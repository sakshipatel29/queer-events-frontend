import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModal';
import AuthModal from './User/AuthModal';

const Navbar = () => {
    const navigate = useNavigate();
    const setAuthModalState = useSetRecoilState(authModalState);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const handleAddEvent = () => {
        if(!userLoggedIn){
            setAuthModalState({
                open: true,
                view: "login",
            })
        }else{
            navigate("/add-event");
        }
    }

    return (
        <>
        <AuthModal />
        <div className="navbar-container">
            <Link to="/">
            <p className="navbar-title">Queer RSEA Events</p>
            </Link>
            <div className="icon-container">
                <MdAdd onClick={handleAddEvent} />
            </div>
        </div>
        </>
    );
}

export default Navbar;

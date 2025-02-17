import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import { authModalState } from '../../atoms/authModal';
import './AuthModal.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userAtomState } from '../../atoms/userAtom';

const AuthModal = () => {
    const navigate = useNavigate();
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [logInErrorMsg, setLogInErrorMsg] = useState("");
    const [setUserStateValue] = useRecoilState(userAtomState);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }));
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSignUp =() => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }));
        navigate("/signup");
    }

    const checkErrors = () => {
        const { email, password } = user;

        if(email.length < 8){
            setLogInErrorMsg("Please enter valid email address!");
        }
        if(password.length < 8){
            setLogInErrorMsg("Please enter password of length at least 8 characters.");
        }
        if(email.length < 8 && password.length < 8){
            setLogInErrorMsg("Please enter email and password of length at least 8.")
        }
    }

    const handleLogIn = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        checkErrors();

        if( email.length >= 8 && password.length >= 8 ){
            setLogInErrorMsg("");
            const res = await axios.post(process.env.REACT_APP_LOGIN, user);
            setLogInErrorMsg(res.data.message);
            console.log(logInErrorMsg);
            setUserStateValue({
                name: res.data.data.name,
                email: res.data.data.email,
            });
            setModalState(prev => ({
                ...prev,
                open: false,
            }));
            navigate("/add-event");
        }
    }

    return (
        <>
            {modalState.open && (
                <>
                    <div className="auth-modal-overlay" onClick={handleClose}></div>
                    <div className="auth-modal">
                        <div className="auth-modal-header">
                            <p>Login</p>
                            <div className="auth-modal-close" onClick={handleClose}>
                                <IoIosClose />
                            </div>
                        </div>
                        <div className="auth-modal-content">
                            <form>
                                <div>
                                    <label>Email Address: </label>
                                    <input
                                        id='email'
                                        name='email'
                                        type='text'
                                        placeholder='abc@example.com'
                                        autoComplete='abc@example.com'
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Password: </label>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='**********'
                                        autoComplete='current-password'
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        {logInErrorMsg && <p>{logInErrorMsg}</p>}
                        <div className="auth-modal-buttons">
                            <button onClick={handleLogIn}>Login</button>
                            <div onClick={handleSignUp}>
                                <p>Request to become a Member!</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default AuthModal;
import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import { authModalState } from '../../atoms/authModal';
import './AuthModal.css';

const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

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
                        <div className="auth-modal-buttons">
                            <button>Login</button>
                            <p>Request to become a Member!</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default AuthModal;
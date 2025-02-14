import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import { authModalState } from '../../atoms/authModal';

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
        <div>
            {modalState.open && (
                <>
                <div>
                    <div>
                        <p>Login</p>
                    </div>
                    <div onClick={handleClose}>
                        <IoIosClose />
                    </div>
                </div>
                <div>
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
                    <div>
                        <button>Login</button>
                        <p>Request to become a Member!</p>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default AuthModal;
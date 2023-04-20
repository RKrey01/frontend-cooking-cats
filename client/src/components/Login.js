import React, {useContext, useEffect, useState} from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserContext from "../UserContext";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        //check if user is logged in or not
        if (user !== null) {
            //sends user to the homepage
            navigate('/');
        }
    }, [navigate, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);

        //login user
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": username,
                "password": pwd,
            }, {
                headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer xxx.xxx.xxx', }
            });
            console.log(JSON.stringify(response?.data));
            setUser(response?.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Register">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="username">gebruikersnaam</label>
                    <input className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" />
                    <label className="form-label" htmlFor="password">wachtwoord</label>
                    <input className="form-input" value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                    <button className="btn btn--primary btn--medium" type="submit">Log In</button>
                </form>
                <button className="btn btn--primary btn--medium link-btn" onClick={() => props.onFormSwitch('sign-up')}>Nog geen account? Registreer hier.</button>
            </div>
        </div>
    )
}
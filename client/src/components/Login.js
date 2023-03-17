import React, {useState} from "react";
import "./Register.css";
import axios from "axios";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="Register">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="register-label" htmlFor="username">gebruikersnaam</label>
                    <input className="register-input" value={username} onChange={(e) => setUsername(e.target.value)}
                           type="text" placeholder="username"
                           id="username" name="username"/>
                    <label className="register-label" htmlFor="password">wachtwoord</label>
                    <input className="register-input" value={pwd} onChange={(e) => setPwd(e.target.value)}
                           type="password"
                           placeholder="*********"
                           id="password" name="password"/>
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Nog geen account? Registreer
                    hier.
                </button>
            </div>
        </div>
    )
}
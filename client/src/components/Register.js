import React, {useState} from "react";
import "./Register.css";
import "./Button.css"
import axios from "axios";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="Register">
            <div className="auth-form-container">
                <h2>Registreer</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="register-label" htmlFor="username">gebruikersnaam</label>
                    <input className="register-input" value={username} onChange={(e) => setUsername(e.target.value)}
                           type="text" placeholder="username"
                           id="username" name="username"/>
                    <label className="register-label" htmlFor="email">email</label>
                    <input className="register-input" value={email} onChange={(e) => setEmail(e.target.value)}
                           name="email"
                           id="email"
                           placeholder="email@gmail.com"></input>
                    <label className="register-label" htmlFor="password">wachtwoord</label>
                    <input className="register-input" value={pwd} onChange={(e) => setPwd(e.target.value)}
                           type="password"
                           placeholder="*********"
                           id="password" name="password"/>
                    <button className="btn btn--primary btn--medium" type="submit">Log In</button>
                </form>
                <button className="btn btn--primary btn--medium link-btn" onClick={() => props.onFormSwitch('login')}>Al
                    een account? Log hier
                    in.
                </button>
            </div>
        </div>
    )
}
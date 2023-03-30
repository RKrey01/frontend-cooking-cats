import React, {useState} from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": username,
                "password": pwd,
            }, {
                headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer xxx.xxx.xxx', }
                // withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error(error);
        }

    //    sends the user to the homepage
        navigate('/');
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
                <button className="btn btn--primary btn--medium link-btn" onClick={() => props.onFormSwitch('register')}>Nog geen account? Registreer hier.</button>
            </div>
        </div>
    )
}
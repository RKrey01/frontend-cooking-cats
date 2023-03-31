import React, {useState} from "react";
import "./Register.css";
import "./Button.css"
import axios from "axios";

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                "username": username,
                "email": email,
                "password": pwd,
                "role": ["user"],
            }, {
                headers: {'Content-Type': 'application/json'
                }
            });
            console.log(JSON.stringify(response?.data));
        } catch (error) {
            console.error(error.response);
            if (error.response.data.message) {
                setError(error.response.data.message);
            } else {
                // because the backend lacks error messages, there will be displayed a custom message
                // so the user knows that they need to try again
                setError("De registratie voldoet niet aan de eisen, probeer het opnieuw.");
            }
        }

    }

    return (
        <div className="Register">
            <div className="auth-form-container">
                {error && <div className="error-message">{error}</div>}
                <h2 className="register-title">Registreer</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="username">gebruikersnaam</label>
                    <input className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" />
                    <label className="form-label" htmlFor="email" >email</label>
                    <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="email@gmail.com" />
                    <label className="form-label" htmlFor="password">wachtwoord</label>
                    <input className="form-input" value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                    <button className="btn btn--primary btn--medium" type="submit">Registreer</button>
                </form>
                <button className="btn btn--primary btn--medium link-btn" onClick={() => props.onFormSwitch('login')}>Al een account? Log hier in.</button>
            </div>
        </div>
    )
}
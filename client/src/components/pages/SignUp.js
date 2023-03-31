import React, {useState} from "react";
import "../../App.css";
import {Register} from "../Register";
import {Login} from "../Login";

export default function SignUp() {
    const [currentForm, setCurrentForm] = useState('sign-up');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <>
            {
                currentForm === "sign-up" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
            }
        </>
    );

}
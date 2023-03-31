import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Home from './components/pages/Home';
import AllRecipes from "./components/pages/AllRecipes";
import Favorites from "./components/pages/Favorites";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import PersonalizedRecipes from "./components/pages/PersonalizedRecipes";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // check authentication status and set state accordingly
        const token = localStorage.getItem('token');
        if (token) {
            // verify token on backend
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes" element={<AllRecipes/>}/>
                <Route
                    path="/favorites"
                    element={
                        isAuthenticated ? (
                            <Favorites />
                        ) : (
                            <Navigate to="/sign-up" />
                        )
                    }
                />
                <Route
                    path="/personalized"
                    element={
                        isAuthenticated ? (
                            <PersonalizedRecipes />
                        ) : (
                            <Navigate to="/sign-up" />
                        )
                    }
                />
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

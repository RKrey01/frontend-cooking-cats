import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import Home from './components/pages/Home';
import AllRecipes from "./components/pages/AllRecipes";
import Favorites from "./components/pages/Favorites";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import PersonalizedRecipes from "./components/pages/PersonalizedRecipes";
import UserContext from "./UserContext";

function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipes" element={<AllRecipes/>}/>
                    <Route
                        exact path="/favorites"
                        element={
                            user ? (
                                <Favorites/>
                            ) : (
                                <Navigate to="/sign-up"/>
                            )
                        }
                    />
                    <Route
                        exact path="/personalized"
                        element={
                            user ? (
                                <PersonalizedRecipes/>
                            ) : (
                                <Navigate to="/sign-up"/>
                            )
                        }
                    />
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
                <Footer/>
            </Router>
        </UserContext.Provider>
    );
}

export default App;

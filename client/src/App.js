import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Home from './components/pages/Home';
import AllRecipes from "./components/pages/AllRecipes";
import Favorites from "./components/pages/Favorites";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Personalized from "./components/Personalized";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes" element={<AllRecipes/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/personalized" element={<Personalized/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

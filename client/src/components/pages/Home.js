import '../../App.css';
import Intro from '../Intro';
import React from "react";
import PopularRecipes from "../PopularRecipes";

function Home() {
    return (
        <>
            <Intro/>
            <PopularRecipes/>
        </>
    );
}

export default Home;

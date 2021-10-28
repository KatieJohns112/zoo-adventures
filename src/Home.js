import React from "react";
import "./Home.css"
import logo from "./images/all-animals.jpeg"


export const Home = () => (
    <>
        <h2 className="home_header">Welcome to Zoo Adventures ! A both fun and learning experience for parents and children alike. Simply create a list of the animals you would like to see the most at the zoo. Be sure to include a picture of the animal you want to see and all the information you want to know about that animal. After you have seen each animal, you can delete them off of your list and move onto the next. Once you have completed your zoo trip, be sure to include a review with some great pictures from your visit ! Happy Animal Searching ! </h2>
        <img className="logo-logo" src={logo} alt="logo"></img>
    </>
)
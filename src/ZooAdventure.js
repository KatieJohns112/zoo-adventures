import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./ZooAdventure.css"
import logo from "./images/ZooAdventuresLOGO.png.png"



export const ZooAdventure = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
               <img className="logo_navbar" src={logo} alt="logo"></img>
               <h1 className="main_zoo">Zoo A d v e n t u r e s</h1>
           
                  <NavBar />
                  <ApplicationViews />
                  <footer>Zoo Adventures 2021</footer> 
              </>
            )
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    
      </>
  )
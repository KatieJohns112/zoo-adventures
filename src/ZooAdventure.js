import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./ZooAdventure.css"



export const ZooAdventure = () => (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("app_user_id")) {
            return (
              <>
               <img className="logo_navbar" src="../../public/images/ZooAdventuresLOGO.png.png" alt="logo"></img>
               <h1 className="main_zoo">Zoo A d v e n t u r e s</h1>
                  <NavBar />
                  <ApplicationViews />
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
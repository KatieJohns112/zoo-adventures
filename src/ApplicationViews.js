import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./components/Animals/AnimalCard"
import { AnimalList } from "./components/Animals/AnimalList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:8088/ */}
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/animals">
              <AnimalList />
            </Route>
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./components/Animals/AnimalList"
import { AnimalForm } from "./components/Animals/AnimalForm"
import { LocationList } from "./components/Locations/LocationLIst"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:8088/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>

            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/locations">
              <LocationList />
            </Route>

            {/* <Route path="/locations">
              <LocationList />
            </Route> */}
        </>
    )
}
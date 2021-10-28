
import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getEventById } from "./EventManager"
import { update } from "./EventManager"
import "./EditEvent.css"
import { getAllImages } from "../../ImageManager"
import { getAllLocations } from "../Locations/LocationManager"

export const EventEditForm = () => {
    // animal is the non changing state of the data | setAnimal is returned after the state has changed
    const [eventState, setEvent] = useState({ name: "", image: "", description: "", locationId: 1, date: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImages] = useState([]);
    const [location, setLocation] = useState([]);
  
  // useParams refers to the <route>
    const { eventId } = useParams();
    const history = useHistory();
    // history and useHistory refer to all URLs visited and push new ones onto that stack
  
    // handleFieldChange sets a new state for whatever is being inputed
    const handleFieldChange = evt => {
      // stateToChange is changing the state of the app when animal is called
      const stateToChange = { ...eventState };
      stateToChange[evt.target.id] = evt.target.value;
      // setAnimal becomes the new state of the app
      setEvent(stateToChange);
    };
  
    // updateExistingAnimal is updating an existing animal
    const updateExistingEvent = evt => {
      // prevent HTML from carrying our default actions
      evt.preventDefault()
      setIsLoading(true);
      // indicates an app is loading information
  
      // This is an edit, so we need the id
      const editedEvent = {
        id: eventId,
        // userId : parseInt(sessionStorage.getItem("app_user_id")),
        name: eventState.name,
        image: eventState.image,
        description: eventState.description,
        date: eventState.date,
        locationId: eventState.locationId
      };
      console.log(editedEvent)
      update(editedEvent)
        .then(() => history.push("/events")
        )
    }
  // changing the DOM in a react component
    useEffect(() => {
      // getAnimalById from animal manager and call animal Id | => is defining a function | setAnimal is calling animal and setting the new state of the DOM
      getEventById(eventId)
        .then(event => {
          setEvent(event);
          setIsLoading(false);
        });
  
      getAllImages().then(picture => {
        setImages(picture);
      });
  
      getAllLocations().then(place => {
        setLocation(place);
      })
    }, []);
  
    return (
      <>
        <h3 className="animal_form_title">Edit event card</h3>
        <form>
          <fieldset className="edit_animal_fieldset">
            <div className="formgrid">
              <div className="name">
              <label className="animal-name" htmlFor="name">Event name  </label> <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={eventState.name}
              />
            </div>
              <div className="animal__image">
                <label className="animal-image" htmlFor="image">Image  </label> <select value={eventState.image} name="address" id="image" onChange={handleFieldChange} className="form-control" >
                  <option value="0">Select an image</option>
                  {/* array of images/ images is an array */}
                  {image.map(l => (
                    <option key={l.id} value={l.address}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="knowledge">
                <label className="animal-knowledge" htmlFor="description"> What is this event about? </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="description"
                  value={eventState.description}
                />
              </div>
              <div className="knowledge">
                <label className="animal-knowledge" htmlFor="date"> date </label>
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="date"
                  value={eventState.date}
                />
              </div>
              <div className="location">
                <label className="animal-location" htmlFor="location">Location ID  </label>
                <select value={eventState.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                  <option value="0">Select a location  </option>
                  {location.map(l => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingEvent}
                  className="submit_animal_button"
                >Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
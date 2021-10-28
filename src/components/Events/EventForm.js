import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addEvent } from "./EventManager";
import { getAllLocations } from "../Locations/LocationManager";
import { getAllImages } from "../../ImageManager";
import "./EventForm.css"


export const EventForm = () => {
    // make sure "event" is never the same name as something else
    const [event, setEvent] = useState({
        name: "",
        // parse the Int from app_user_id
        image:"",
        description:"",
        date: "",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [images, setImages] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (e) => {
        const newEvent = { ...event}
        let selectedVal = e.target.value
        if (e.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEvent[e.target.id] = selectedVal
        setEvent(newEvent)
    }
    useEffect(() => {
        getAllLocations().then((location) => {
            setLocations(location);
        }
    )}, []);
    useEffect(() => {
        getAllImages().then((image) => {
        setImages(image);
        }
    )}, []);

    const handleClickSaveEvent = (e) => {
        e.preventDefault();

        const locationId = event.locationId
        const imageId = event.image

        if (locationId === 0 || imageId === 0) {
            window.alert("please select a location and an image")
        } else {
            addEvent(event)
            .then(() => history.push("/events/"))
        }
    }
    return (
        <form className="event_form">
            <h3 className="event_form_title">Create a new event</h3>
            <fieldset className="name_event_fieldset">
                <div className="form_group">
                    <label htmlFor="name">Event name  </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name} />
                </div>
            </fieldset>
            <fieldset className="description_fieldset">
            <div className="form-group">
					<label htmlFor="description">What is this event? </label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="what is this event about?" value={event.description} />
				</div>
            </fieldset>
            <fieldset className="date_fieldset">
            <div className="form-group">
					<label htmlFor="description">When is the event? </label>
					<input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="what is the event?" value={event.date} />
				</div>
            </fieldset>
            <fieldset className="event_fieldset">
				<div className="form-group">
					<label htmlFor="location">What zoo is this animal at?  </label>
					<select value={event.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset className="image_fieldset">
				<div className="form-group">
					<label htmlFor="image">Image  </label>
					<select value={event.image} name="address" id="image" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an image  </option>
						{images.map(l => (
							<option key={l.id} value={l.address}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <button className="save_event_button"
				onClick={handleClickSaveEvent}>
				Save Animal
          </button>
        </form>
    )
}

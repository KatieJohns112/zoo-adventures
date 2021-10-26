import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addAnimal } from "./AnimalManager";
import { getAllLocations } from "../Locations/LocationManager";
import { getAllImages } from "../../ImageManager";
import "./AnimalForm.css"

export const AnimalForm = () => {
    const [animal, setAnimal] = useState({
        name: "",
        // parse the Int from app_user_id
        userId: parseInt(sessionStorage.getItem('app_user_id')),
        image:"",
        knowledge:"",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [images, setImages] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newAnimal[event.target.id] = selectedVal
        setAnimal(newAnimal)
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

    const handleClickSaveAnimal = (event) => {
        event.preventDefault();

        const locationId = animal.locationId
        const imageId = animal.image

        if (locationId === 0 || imageId === 0) {
            window.alert("please select a location and an image")
        } else {
            addAnimal(animal)
            .then(() => history.push("/animals/"))
        }
    }
    return (
        <form className="animal_form">
            <h3 className="animal_form_title">Create a new animal</h3>
            <fieldset className="name_fieldset">
                <div className="form_group">
                    <label htmlFor="name">Animal name  </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
                </div>
            </fieldset>
            <fieldset className="knowledge_fieldset">
            <div className="form-group">
					<label htmlFor="knowledge">What do you want to learn about this animal?  </label>
					<input type="text" id="knowledge" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="what do you want to know?" value={animal.knowledge} />
				</div>
            </fieldset>
            <fieldset className="zoo_fieldset">
				<div className="form-group">
					<label htmlFor="location">What zoo is this animal at?  </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
					<select value={animal.image} name="address" id="image" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an image  </option>
						{images.map(l => (
							<option key={l.id} value={l.address}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <button className="save_animal_button"
				onClick={handleClickSaveAnimal}>
				Save Animal
          </button>
        </form>
    )
}


import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getAnimalById } from "./AnimalManager"
import { update } from "./AnimalManager"
import "./AnimalEditForm.css"
import { getAllImages } from "../../ImageManager"
import { getAllLocations } from "../Locations/LocationManager"

// AnimalEditForm holds all information below
export const AnimalEditForm = () => {
  // animal is the non changing state of the data | setAnimal is returned after the state has changed
  const [animal, setAnimal] = useState({ name: "", image: "", knowledge: "", locationId: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImages] = useState([]);
  const [location, setLocation] = useState([]);

// useParams refers to the <route>
  const { animalId } = useParams();
  const history = useHistory();
  // history and useHistory refer to all URLs visited and push new ones onto that stack

  // handleFieldChnage sets a new state for whatever is being inputed
  const handleFieldChange = evt => {
    // stateToChange is changing the state of the app when animal is called
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    // setAnimal becomes the new state of the app
    setAnimal(stateToChange);
  };

  // updateExistingAnimal is updating an existing animal
  const updateExistingAnimal = evt => {
    // prevent HTML from carrying our default actions
    evt.preventDefault()
    setIsLoading(true);
    // indicates an app is loading information

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      image: animal.image,
      knowledge: animal.knowledge,
      locationId: 1
    };
    console.log(editedAnimal)
    update(editedAnimal)
      .then(() => history.push("/animals")
      )
  }
// chnaging the DOM in a react component
  useEffect(() => {
    // getAnimalById from animal manager and call animal Id | => is defining a function | setAnimal is calling animal and setting the new state of the DOM
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
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
      <h3 className="animal_form_title">Edit animal card</h3>
      <form>
        <fieldset className="edit_animal_fieldset">
          <div className="formgrid">
            <div className="name">
            <label className="animal-name" htmlFor="name">Animal name  </label> <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
          </div>
            <div className="animal__image">
              <label className="animal-image" htmlFor="image">Image  </label> <select value={animal.image} name="address" id="image" onChange={handleFieldChange} className="form-control" >
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
              <label className="animal-knowledge" htmlFor="knowledge"> Desired Knowledge  </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="knowledge"
                value={animal.knowledge}
              />
            </div>
            <div className="location">
              <label className="animal-location" htmlFor="location">Location ID  </label>
              <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
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
                onClick={updateExistingAnimal}
                className="submit_animal_button"
              >Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
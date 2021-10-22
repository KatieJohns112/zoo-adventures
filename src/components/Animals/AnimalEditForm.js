
import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getAnimalById } from "./AnimalManager"
import { update } from "./AnimalManager"
import "./AnimalEditForm.css"
import { getAllImages } from "../../ImageManager"
import { getAllLocations } from "../Locations/LocationManager"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", image: "", knowledge:"", locationId:1 });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImages] = useState([]);
  const [location, setLocation] = useState([]);
//   setImage is setting the new state

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

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

  useEffect(() => {
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
            <input 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label className="animal-name"htmlFor="name">Animal name</label>

            <label className="animal-image"htmlFor="image">image</label>

            <div className="animal__image">
            <select value={animal.image} name="address" id="image" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select an image  </option>
                        {/* array of images */}
						{image.map(l => (
							<option key={l.id} value={l.address}>
								{l.name}
							</option>
						))}
					</select>
</div>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="knowledge"
              value={animal.knowledge}
            />
            <label className="animal-knowledge"htmlFor="knowledge">Desired knowledge</label>

            <label className="animal-location"htmlFor="breed">Location ID</label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a location</option>
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
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
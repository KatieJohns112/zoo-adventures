
import React, { useState, useEffect } from "react"
import "./AnimalForm.css"
import { useParams, useHistory } from "react-router-dom"
import { getAnimalById } from "./AnimalManager"
import { update } from "./AnimalManager"
import "./AnimalEditForm.css"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", image: "", knowledge:"", locationId:1 });
  const [isLoading, setIsLoading] = useState(false);

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
      breed: animal.image,
      image: animal.knowledge,
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

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={animal.image}
            />
            <label className="animal-image"htmlFor="image">image</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="knowledge"
              value={animal.knowledge}
            />
            <label className="animal-knowledge"htmlFor="knowledge">Desired knowledge</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="locationId"
              value={animal.locationId}
            />
            <label className="animal-location"htmlFor="breed">Location ID</label>
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
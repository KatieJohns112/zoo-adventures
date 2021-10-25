import React from "react";
import { useHistory } from "react-router";
import "./AnimalCard.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    // setting user storage to user specific ID
    const userLogged = parseInt(sessionStorage.getItem("app_user_id"))
    // parseInt to get the integer value of the user id
    console.log(animal)
    // == serves as an if statement then return....
    if(animal.userId == userLogged) {
        return (

        <div className= "main-card">
        <div className="animal_cards">
            <div className="header">Zoo adventures animal</div>
            <div className="animal_card_content">
            <picture>
                {/* animal."" accesses the property being called | animal.image is displaying the animal image*/}
            {animal.image != "" ?  <img src={`../../images/${animal.image}`} alt="Animal" className="animal__image"/> : <p>There isn't an image.</p>}
            </picture>
                <h3>{animal.name}</h3>
                <p>What I want to know  : {animal.knowledge}</p>
                <p>Located at  : {animal.location.name}</p>
                {/* handleDeleteAnimal removes animal from the DOM and database | onClick refers to performing an action when the button is clicked */}
                <button className="remove_button" type="button" onClick={() => handleDeleteAnimal(animal.id)}>Remove</button>
                <button className="edit_button" type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}>Edit</button>
                </div>
            </div>
        </div>
       
    );

  }else {
      return null;
  }

}
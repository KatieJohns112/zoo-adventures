import React from "react";
import { useHistory } from "react-router";
import "./AnimalCard.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    console.log(animal)
        return (
        <div className= "main-card">
            <div className="animal_cards">
                <div className="header">Zoo adventures animal</div>
                <div className="animal_card_content">
                <picture>
                {animal.image != "" ?  <img src={`../../images/${animal.image}`} alt="Animal" className="animal__image"/> : <p>There isn't an image.</p>}
                </picture>
                    <h3>{animal.name}</h3>
                    <p>What I want to know: {animal.knowledge}</p>
                    <p>Located at: {animal.location.name}</p>
                    <button className="remove_button" type="button" onClick={() => handleDeleteAnimal(animal.id)}>Remove</button>
                    <button className="edit_button" type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}>Edit</button>
                    </div>
                </div>
            </div>
           
        );
}
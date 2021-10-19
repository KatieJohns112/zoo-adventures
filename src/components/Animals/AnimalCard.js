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
                 <img src={require(`../../images/${animal.image}`).default} alt="Dog"/>
                </picture>
                    <h3>{animal.name}</h3>
                    <p>What I want to know: {animal.knowledge}</p>
                    <p>Located at: {animal.locationId}</p>
                    <button className="remove_button" type="button" onClick={() => handleDeleteAnimal(animal.id)}>Remove</button>
                    <button className="edit_button" type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}>Edit</button>
                    </div>
                </div>
            </div>
           
        );
}
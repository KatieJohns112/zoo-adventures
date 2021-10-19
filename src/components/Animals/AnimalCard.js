import React from "react";
import { useHistory } from "react-router";
import "./AnimalCard.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    console.log(animal)
        return (
        
            <div className="animal_cards">
                <div className="header">Zoo adventures animal</div>
                <div className="animal_card_content">
                    <h3>{animal.name}</h3>
                    <p>What I want to know: {animal.knowledge}</p>
                    <p>Located at: {animal.locationId}</p>
                    <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Remove</button>
                    <button type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}>Edit</button>
                </div>
            </div>
           
        );
}
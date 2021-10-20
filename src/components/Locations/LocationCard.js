import React from "react"
import "./LocationCard.css"

// this is a component
export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
        <>
      <div className="card_location">
        <div className="card_content_location">
          <h3>Name: <span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <p>Operation Hours: {location.hours}</p>
          <p>Price Range: {location.price}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close</button>
        </div>
      </div>
      </>
    );
  }
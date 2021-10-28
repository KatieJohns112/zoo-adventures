import React from "react"
import "./LocationCard.css"

// this is a component
export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
        <>
      <div className="card_location">
        <div className="card_content_location">
          <h3><span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <p>Operation Hours: {location.hours}</p>
          <p>Price Range: {location.price}</p>
          {/* <button type="button" onClick={() => handleDeleteLocation(location.id)}>Remove from my list</button> */}
        </div>
      </div>
      </>
    );
  }
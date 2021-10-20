import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard';
import { deleteLocation, getAllLocations } from './LocationManager';
import "./LocationList.css"


export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
};

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <><h2 className="location_header">Welcome to Zoo Adventures Location page. Located below you will find all zoos with their locations that are relative to this app. Under the events section you can find events that are happening at each one of these zoos as well. All locations accomodate our Zoo Adventures app and encourage the bonding between parents and children through learning experiences.</h2>
     <img className="nashville_map" src="../../../public/images/nashvillemap.jpeg" alt="logo"></img>
        <div className="container-cards">
          {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation} />
          )}
      </div></>
  );
};
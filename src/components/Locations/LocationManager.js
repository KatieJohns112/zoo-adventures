const remoteURL = "http://localhost:8088"

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
  }

  export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const getLocationById = (locationId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/locations/${locationId}`)
    .then(res => res.json())
  }
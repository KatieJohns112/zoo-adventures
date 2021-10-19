const remoteURL = "http://localhost:8088"

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
  }
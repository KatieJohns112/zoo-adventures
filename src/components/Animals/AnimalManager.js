const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
    return fetch(`${remoteURL}/animals/${animalId}`)
    .then(res => res.json())
  }
  
  export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(res => res.json())
  }

  export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addAnimal = (newAnimal) => {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(response => response.json())
  }
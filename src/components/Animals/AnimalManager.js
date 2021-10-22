// contains all fetch calls to the API

const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
    return fetch(`${remoteURL}/animals/${animalId}`)
    .then(res => res.json())
  }
  
  export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals?_expand=location`)
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

  export const update = (editedAnimal) => {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
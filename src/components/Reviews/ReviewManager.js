// contains all fetch calls to the API

const remoteURL = "http://localhost:8088"

export const getReviewById = (reviewId) => {
    return fetch(`${remoteURL}/reviews/${reviewId}`)
    .then(res => res.json())
  }
  
  export const getAllReviews = () => {
    return fetch(`${remoteURL}/reviews?_expand=location`)
    .then(res => res.json())
  }

  export const deleteReview = (id) => {
    return fetch(`${remoteURL}/reviews/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

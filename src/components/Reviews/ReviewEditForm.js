
import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getReviewById } from "./ReviewManager"
import { update } from "./ReviewManager"
import { getAllImages } from "../../ImageManager"
import { getAllLocations } from "../Locations/LocationManager"
import "./ReviewEditForm.css"

// AnimalEditForm holds all information below
export const ReviewEditForm = () => {
  // animal is the non changing state of the data | setAnimal is returned after the state has changed
  const [review, setReview] = useState({ name: "", image: "", statement: "", locationId: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImages] = useState([]);
  const [location, setLocation] = useState([]);

// useParams refers to the <route>
  const { reviewId } = useParams();
  const history = useHistory();
  // history and useHistory refer to all URLs visited and push new ones onto that stack

  // handleFieldChange sets a new state for whatever is being inputed
  const handleFieldChange = evt => {
    // stateToChange is changing the state of the app when animal is called
    const stateToChange = { ...review };
    stateToChange[evt.target.id] = evt.target.value;
    // setAnimal becomes the new state of the app
    setReview(stateToChange);
  };

  // updateExistingAnimal is updating an existing animal
  const updateExistingReview = evt => {
    // prevent HTML from carrying our default actions
    evt.preventDefault()
    setIsLoading(true);
    // indicates an app is loading information

    // This is an edit, so we need the id
    const editedReview = {
      id: reviewId,
      userId : parseInt(sessionStorage.getItem("app_user_id")),
      name: review.name,
      image: review.image,
      statement: review.statement,
      timestamp: review.timestamp,
      locationId: 1
    };
    console.log(editedReview)
    update(editedReview)
      .then(() => history.push("/reviews")
      )
  }
// changing the DOM in a react component
  useEffect(() => {
    // getAnimalById from animal manager and call animal Id | => is defining a function | setAnimal is calling animal and setting the new state of the DOM
    getReviewById(reviewId)
      .then(review => {
        setReview(review);
        setIsLoading(false);
      });

    getAllImages().then(picture => {
      setImages(picture);
    });

    getAllLocations().then(place => {
      setLocation(place);
    })
  }, []);

  return (
    <>
      <h5 className="review_form_title">Edit review card</h5>
      <form>
        <fieldset className="edit_review_fieldset">
          <div className="formgrid">
            <div className="name">
            <label className="review-name" htmlFor="name">Reviewee name  </label> <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={review.name}
            />
          </div>
            <div className="review__image">
              <label className="review-image-image" htmlFor="image">Image  </label>
               <select value={review.image} name="address" id="image" onChange={handleFieldChange} className="image-control" >
                <option value="0">Select an image</option>
                {/* array of images/ images is an array */}
                {image.map(l => (
                  <option key={l.id} value={l.address}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="statement">
              <label className="review-knowledge-wanted" htmlFor="statement">Summary </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="statement"
                value={review.statement}
              />
            </div>
            <div className="location-review">
              <label className="review-location" htmlFor="location">Location ID  </label>
              <select value={review.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                <option value="0">Select a location  </option>
                {location.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingReview}
                className="submit_review_button"
              >Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
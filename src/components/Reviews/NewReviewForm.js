import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addReview } from "./ReviewManager";
import { getAllLocations } from "../Locations/LocationManager";
import { getAllImages } from "../../ImageManager";
import "./NewReviewForm.css"

export const ReviewForm = () => {
    const [review, setReview] = useState({
        name: "",
        userId: parseInt(sessionStorage.getItem('app_user_id')),
        statement: "",
        timestamp:Date.now(),
        image: "",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [images, setImages] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newReview = { ...review }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newReview[event.target.id] = selectedVal
        setReview(newReview)
    }
    useEffect(() => {
        getAllLocations().then((location) => {
            setLocations(location);
        }
        )
    }, []);
    useEffect(() => {
        getAllImages().then((image) => {
            setImages(image);
        }
    )}, []);

    const handleClickSaveReview = (event) => {
        event.preventDefault();

        const locationId = review.locationId
        const imageId = review.image

        if (locationId === 0 || imageId === 0) {
            window.alert("please select a location and an image")
        } else {
            addReview(review)
            .then(() => history.push("/reviews/"))
        }
    }

    return (
        <form className="review_form">
            <h5 className="review_form_title">Create a new review</h5>
            <fieldset className="name_fieldset_review">
                <div className="form-group">
                    <label htmlFor="name">Reviewe name  </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Reviewer name" value={review.name} />
                </div>
            </fieldset>
         
            <fieldset className="statement_fieldset">
            <div className="form-group">
					<label htmlFor="statement">What do you want to learn about this animal?  </label>
					<input type="text" id="statement" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="how was your experience?" value={review.statement} />
				</div>
            </fieldset>
            <fieldset className="review_location_fieldset">
				<div className="form-group">
					<label htmlFor="location">What zoo is this animal at?  </label>
					<select value={review.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset className="review_image_fieldset">
				<div className="form-group">
					<label htmlFor="image">Image  </label>
					<select value={review.image} name="address" id="image" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an image  </option>
						{images.map(l => (
							<option key={l.id} value={l.address}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <button className="save_review_button"
				onClick={handleClickSaveReview}>
				Save Review
          </button>
        </form>
    )
}

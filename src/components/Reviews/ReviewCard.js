import React from "react"
// import { useHistory } from "react-router";
import "./ReviewCard.css"

// this is a component
export const ReviewCard = ({ review, handleDeleteReview }) => {
    // const history = useHistory();
    return (
        <>
      <div className="card_review">
        <div className="card_content_review">
        <picture >
                {/* animal."" accesses the property being called | animal.image is displaying the animal image*/}
            {review.image != "" ?  <img className="review-image"src={`../../images/${review.image}`} alt="Zoo picture"/> : <p>There isn't an image.</p>}
          </picture>
          <h6 className="card-review-name">Reviewed by  :   {review.name}</h6>
          <p>Zoo name  : {review.location.name}</p>
          <p>Visited on  : {review.date}</p>
          <p> {review.statement}</p>
         
         
          <button type="button" onClick={() => handleDeleteReview(review.id)}>Remove my review</button>
        </div>
      </div>
      </>
    );
  }
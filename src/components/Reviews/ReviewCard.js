import React from "react"
import { useHistory } from "react-router";
import "./ReviewCard.css"

// this is a component
export const ReviewCard = ({ review, handleDeleteReview }) => {
  const history = useHistory();
  const getReadableDate = (date) => {
    return new Date(date).toLocaleDateString();
  }
  return (
    <>
      <div className="card_review">
        <div className="card_content_review">

          <picture >
            {/* animal."" accesses the property being called | animal.image is displaying the animal image*/}
            {review.image != "" ? <img className="review-image" src={`../../images/${review.image}`} alt="Zoo picture" /> : <p>There isn't an image.</p>}
          </picture>
          <div className="star_chart">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          </div>
          <h6 className="card-review-name">Reviewed by  :   {review.name}</h6>
          <p>Zoo name  : {review.location.name}</p>
          <p className="timestamp">{getReadableDate(review.timestamp)}</p>
          <p> {review.statement}</p>
          <button className="edit_button" type="button" onClick={() => history.push(`/reviews/${review.id}/edit`)}>Edit</button>
          <button type="button" onClick={() => handleDeleteReview(review.id)}>Remove my review</button>
        </div>
      </div>
    </>
  );
}
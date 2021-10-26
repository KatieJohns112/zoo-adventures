import React, { useState, useEffect } from 'react';
import { ReviewCard } from './ReviewCard';
import { getAllReviews, deleteReview } from './ReviewManager';
import "./ReviewCard.css"
import { useHistory } from 'react-router'

export const ReviewList = () => {

    const [reviews, setReviews] = useState([]);

    const history = useHistory();

    const getReviews = () => {
        return getAllReviews().then(reviewsFromAPI => {
            setReviews(reviewsFromAPI)
        });
    };

    const handleDeleteReview = id => {
        deleteReview(id)
            .then(() => getAllReviews().then(setReviews));
    };

    useEffect(() => {
        console.log("useEffect running")
        getReviews();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="new-review-button"
                    onClick={() => {history.push("/reviews/create")}}>
                    Create new Review Card
                </button>
            </section>
            <div className="container-cards-reviews">
                {reviews.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview} />
                )}
            </div>
        </>
    );
};
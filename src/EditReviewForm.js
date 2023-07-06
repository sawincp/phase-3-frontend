import React, { useState } from 'react'

const EditReviewForm = ({ review, onUpdateReview }) => {

    const [score, setScore]= useState(review.score)
    const[comment, setComment]= useState(review.comment)

    const handleSubmit = (e) =>{
        e.preventDefault()

        fetch(`http://localhost:9292/reviews/${review.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                score: score,
                comment: comment,
              }),
            })
            .then(res => res.json())
            .then((updatedReview)=> onUpdateReview(updatedReview))
    }
    
    return (
         <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input type='submit' value='Save' />
        </form>
    )
}

export default EditReviewForm
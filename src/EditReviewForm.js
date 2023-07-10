import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
      <Container>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </Col>
            <Col>
              <textarea
              name="new-comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              />
            </Col>
            <Col><button type='submit'>Save</button></Col>
          </Row>
        </form>
      </Container>
    )
}

export default EditReviewForm
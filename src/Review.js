import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EditReviewForm from './EditReviewForm'

const Review = ({ review, onDeleteReview, onUpdateReview}) => {

  const [isEditing, setIsEditing]= useState(false)


  const handleDelete = () => {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
  });
  onDeleteReview(review.id)
}

const handleUpdateReview= (updatedReview) =>{
  setIsEditing(false)
  onUpdateReview(updatedReview)
}

  return (
    <Container>
    <Row> 
        <Col><p>{review.score}</p></Col>
        <Col>
        <p>{review.comment}</p>
        </Col>
        <Col>
        <button onClick ={handleDelete}>
            <span role='img' aria-label='delete'>
            🗑
            </span>
          </button>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          </Col>
    </Row>
    <Row>
    {isEditing ? (
            <EditReviewForm 
              review={review}
              onUpdateReview={handleUpdateReview}/>
          ): null}
    </Row>
</Container>
  )
}

export default Review
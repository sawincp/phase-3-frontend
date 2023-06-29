import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Review = ({ review, onDeleteReview }) => {

  const handleDelete = () => {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
  });
  onDeleteReview(review.id)
}

  return (
    <Container> {review.title}
    <Row> 
        <Col><p>{review.score}</p></Col>
        <Col>
        <p>{review.comment}</p>
          <button onClick ={handleDelete}>
            <span role='img' aria-label='delete'>
            🗑
            </span>
          </button>
        
        </Col>

    </Row>

    
</Container>
  )
}

export default Review
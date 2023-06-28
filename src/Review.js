import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Review = ({ review }) => {



  return (
    <Container> {review.title}
    <Row> 
        <Col><p>{review.score}</p></Col>
        <Col><p>{review.comment}</p></Col>
    </Row>

    
</Container>
  )
}

export default Review
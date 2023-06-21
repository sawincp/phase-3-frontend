import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Movie = ({movie}) => {

  const {title, genre}= movie

  return (
    <Container>
      <Row>
        <Col><p>{title}</p></Col>
        <Col>{genre}</Col>
      </Row>
    </Container>
  )
}

export default Movie
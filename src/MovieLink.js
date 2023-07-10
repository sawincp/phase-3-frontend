import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


const MovieLink = ({ movie }) => {

  return (
    <Container>
        <Row> 
            <Col><p>{movie.title}</p></Col>
            <Col><p>{movie.genre}</p></Col>
            <Col>
                <Link to={`/movies/${movie.id}`} >
                    <p>Reviews</p>
                </Link>
            </Col>
        </Row>

        
    </Container>
  )
}

export default MovieLink
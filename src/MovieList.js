import React from 'react'
import MovieLink from './MovieLink'
import { Container, Row, Col } from 'react-bootstrap'

const MovieList = ({movies}) => {

  if(!movies) return ("Loading...")

  const listOfMovies = movies.map(movie=> 
    <MovieLink
    key={movie.id}
    movie={movie}/>)

  const movieListStyle ={
    padding: "20px"
  }

  return(

    <Container style={movieListStyle}>
      <Row>
        <Col><h3>TITLE</h3></Col>
        <Col><h3>GENRE</h3></Col>
        <Col><h3>REVIEWS</h3></Col>
      </Row>
      <Row>
        {listOfMovies}
      </Row>
    </Container>
  )
}

export default MovieList
import React, { useState, useEffect } from 'react'
import MovieLink from './MovieLink'
import { Container, Row, Col } from 'react-bootstrap'



const MovieList = () => {

  const [movies, setMovies]= useState([])
  const [movieFormFlag, setMovieFormFlag]= useState(false)

  useEffect(()=>{
    fetch("http://localhost:9292/movies")
    .then((r)=> r.json())
    .then((movies)=> setMovies(movies))
  },[])

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
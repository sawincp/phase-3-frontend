import React, { useState, useEffect } from 'react'
import Movie from './Movie'

import { Container, Row, Col } from 'react-bootstrap'

const MovieList = () => {

  const [movies, setMovies]= useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/movies")
    .then((r)=> r.json())
    .then((movies)=> setMovies(movies))
    // .then((movies)=> console.log(movies))
  },[])

  if(!movies) return ("Loading...")


  const movieListStyle ={
    padding: "20px"
  }
  // const list = movies.map(movie => movie.genre)
  // console.log("movies genres:", list)

  return(

    <Container style={movieListStyle}>
      <Row>
        <Col><h2>Title</h2>
        {movies.map((movie)=>(
          <Movie
          key={movie.id}
          title={movie.title}
         />
         ))}
        </Col>
        <Col><h2>Genre</h2>
        {movies.map((movie)=>(
          <Movie
          key={movie.id}
          genre={movie.genre}
          />
        ))}
        </Col>
      </Row>
    </Container>
    
  )

  }

export default MovieList
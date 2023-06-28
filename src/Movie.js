import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

import Review from './Review'

const Movie = () => {

  const [movie, setMovie]= useState({
    reviews: []
  })
  
  const [reviewFormFlag, setReviewFormFlag]= useState(false)

  const params = useParams()
  
  useEffect (()=>{
    fetch(`http://localhost:9292/movies/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovie(data)
    })
  }, [])


const reviews = movie.reviews.map(review => 
  <Review 
    key={review.id}
    review={review}
  /> )

  const movieListStyle ={
    padding: "20px"
  }
  
  
  return (
    <Container style={movieListStyle}>
      <Row style={{textAlign: "center"}}><h1>{movie.title}</h1>
      <hr></hr>
        <Col><h3>SCORE</h3></Col>
        <Col><h3>REVIEWS</h3></Col>
      </Row>
      <Row style={{textAlign: "center"}}>
        {reviews}
      </Row>
    </Container>

  )
}

export default Movie
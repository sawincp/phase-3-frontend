import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

import Review from './Review'
import NewReview from './NewReview'

const Reviews = () => {
  
  const params = useParams()
  
  const [movie, setMovie]= useState({
    reviews: []
  })

  useEffect (()=>{
    fetch(`http://localhost:9292/movies/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setMovie(data)
    })
  }, [])

  const addReview = (newReview) =>{
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews: [...prevMovie.reviews, newReview],
    }));
  }

  const handleUpdatedReview = (updatedReview) =>{
    setMovie((prevMovie) => {
      const updatedReviews = prevMovie.reviews.map((review) => {
        if (review.id === updatedReview.id) {
          return updatedReview;
        } else {
          return review;
        }
      });
      return { ...prevMovie, reviews: updatedReviews };
    });

  }

  const handleDeleteReview = (reviewId) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews: prevMovie.reviews.filter((review) => review.id !== reviewId),
    }));
  };

  const reviews = movie.reviews.map(review => 
    <Review 
      key = {review.id}
      review = {review}
      onDeleteReview = {handleDeleteReview}
      onUpdateReview ={handleUpdatedReview}
  
    /> );

    const movieListStyle ={
      padding: "20px"
    }

  return (
    <Container style={movieListStyle}>
      <Row style={{textAlign: "center"}}>
        <h1>{movie.title} REVIEWS</h1>
        <hr></hr>
        <Col><h3>SCORE</h3></Col>
        <Col><h3>REVIEWS</h3></Col>
      </Row>
      <Row style={{textAlign: "center"}}>
        {reviews}
        <NewReview onAddReview={addReview} />
      </Row>
    </Container>
  )
}

export default Reviews
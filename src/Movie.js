import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

import Review from './Review'
import NewReview from './NewReview'

const Movie = () => {
  
  const params = useParams()
  
  const [movie, setMovie]= useState({
    reviews: []
  })
  
  const [editReview, setEditReview] = useState(null)
  
  const [isEditFromOpen, setIsEditFormOpen]= useState(false)

  useEffect (()=>{
    fetch(`http://localhost:9292/movies/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setMovie(data)
    })
  }, [])

  const addReview = (newReview) => {
    fetch(`http://localhost:9292/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: newReview.score,
        comment: newReview.comment,
        movie_id: params.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie((prevMovie) => ({
          ...prevMovie,
          reviews: [...prevMovie.reviews, data],
        }));
      });
  };

  const handleEditReview = (review) =>{
    setEditReview(review)
    setIsEditFormOpen(true)
  }

  const handleCancelEdit = () =>{
    setEditReview(null)
    setIsEditFormOpen(false)
  }

  const handleUpdateReview = (updatedReview) => {
    fetch(`http://localhost:9292/reviews/${updatedReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: updatedReview.score,
        comment: updatedReview.comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie((prevMovie) => {
          const updatedReviews = prevMovie.reviews.map((review) =>
            review.id === data.id ? data : review
          );
          return { ...prevMovie, reviews: updatedReviews };
        });
        setIsEditFormOpen(false);
      });
  };

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
      onEditReview={handleEditReview}
    /> );

    const movieListStyle ={
      padding: "20px"
    }

  return (
    <Container style={movieListStyle}>
      <Row style={{textAlign: "center"}}>
        <h1>{movie.title}</h1>
        <hr></hr>
        <Col><h3>SCORE</h3></Col>
        <Col><h3>REVIEWS</h3></Col>
      </Row>
      <Row style={{textAlign: "center"}}>
        {reviews}
        {isEditFromOpen && (
          <EditReviewForm 
            review = {editReview}
            onUpdatedReview= {handleUpdateReview}
            onCancelEdit= {handleCancelEdit}/>
        )}
        <NewReview onAddReview={addReview} />
      </Row>
    </Container>
  )
}

export default Movie
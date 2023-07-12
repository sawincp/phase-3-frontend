import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Review from './Review';
import NewReview from './NewReview';

const Reviews = ({ movies, onAddReview, onUpdateReview, onDeleteReview }) => {
  
  const params = useParams();
  const movieId = Number(params.id);
  const movie = movies.find((movie) => movie.id === movieId);

  const addReview = (newReview) => {
    onAddReview(movieId, newReview);
  };

  const handleUpdatedReview = (updatedReview) => {
    onUpdateReview(movieId, updatedReview);
  };

  const handleDeleteReview = (reviewId) => {
    onDeleteReview(movieId, reviewId);
  };

  const reviews = movie ? (
    movie.reviews.map((review) => (
      <Review
        key={review.id}
        review={review}
        onDeleteReview={handleDeleteReview}
        onUpdateReview={handleUpdatedReview}
      />
    ))
  ) : (
    <p>No reviews found for this movie.</p>
  );

  const movieListStyle = {
    padding: '20px',
  };

  return (
    <Container style={movieListStyle}>
      <Row style={{ textAlign: 'center' }}>
        <h1>{movie ? `${movie.title} REVIEWS` : 'Movie Reviews'}</h1>
        <hr />
        <Col>
          <h3>SCORE</h3>
        </Col>
        <Col>
          <h3>REVIEWS</h3>
        </Col>
      </Row>
      <Row style={{ textAlign: 'center' }}>
        {reviews}
        <NewReview onAddReview={addReview} />
      </Row>
    </Container>
  );
};

export default Reviews;

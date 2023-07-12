import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieList from './MovieList';
import NavBar from './NavBar';
import Reviews from './Reviews';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  const addReview = (movieId, newReview) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            reviews: [...movie.reviews, newReview],
          };
        }
        return movie;
      });
    });
  };

  const updateReview = (movieId, updatedReview) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          const updatedReviews = movie.reviews.map((review) => {
            if (review.id === updatedReview.id) {
              return updatedReview;
            }
            return review;
          });
          return {
            ...movie,
            reviews: updatedReviews,
          };
        }
        return movie;
      });
    });
  };

  const deleteReview = (movieId, reviewId) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          const updatedReviews = movie.reviews.filter(
            (review) => review.id !== reviewId
          );
          return {
            ...movie,
            reviews: updatedReviews,
          };
        }
        return movie;
      });
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/movies"
          element={<MovieList movies={movies} />}
        />
        <Route
          path="/movies/:id"
          element={
            <Reviews
              movies={movies}
              onAddReview={addReview}
              onUpdateReview={updateReview}
              onDeleteReview={deleteReview}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

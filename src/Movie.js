import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
    })
  }, [])



  const movieListStyle ={
    padding: "20px"
  }
  return (
    <div style={movieListStyle}>
      <h3>Movie Reviews</h3>

    </div>

  )
}

export default Movie
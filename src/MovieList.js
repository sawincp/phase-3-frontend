import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {

  const moviesList = movies.map((movie)=>{
    return(
      <Movie
        key={movie.id}
        movie={movie}
      />
    )
  })
  


  return (
    <div className='Movies'>
     <h1> MovieList
      <hr></hr>
     </h1>
     <ul>{moviesList}</ul>
      
    </div>


  )
}

export default MovieList
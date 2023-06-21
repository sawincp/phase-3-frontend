import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {

  const movieListStyle ={
    padding: "20px"
  }

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
     <h1 style={movieListStyle}> Movie List
      <hr></hr>
     </h1>
     <ul>{moviesList}</ul>
      
    </div>


  )
}

export default MovieList
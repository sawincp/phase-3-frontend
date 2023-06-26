import React, { useState } from 'react'

const EditGenre = ( {id, genre, onUpdateGenre}) => {

    const [movieGenre, setMovieGenre]= useState(genre)

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            genre: JSON.stringify({
                genre: movieGenre,
            }),
        })
        .then((r) => r.json())
        .then((updatedGenre)=> onUpdateGenre(updatedGenre))
    }

  return (
    <form className="edit-genre" onSubmit={handleFormSubmit}>
    <input
      type="text"
      name="genre"
      autoComplete="off"
      value={movieGenre}
      onChange={(e) => setMovieGenre(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
  )
}

export default EditGenre
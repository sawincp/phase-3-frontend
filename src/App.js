import React, {useEffect, useState} from 'react'
import Home from "./Home"
import Movies from "./Movies"


function App() {

  // const [movies, setMovies]= useState([])
  // const [reviews, setReviews]= useState([])
  // const [search, setSearch]= useState("")

  // useEffect(()=>{
  //   fetch("http://localhost:9292/movies")
  //   .then((r)=> r.json)
  //   .then((movies)=> setMovies(movies))
  // },[])

  // useEffect(()=>{
  //   fetch("http://localhost:9292/reviews")
  //   .then((r)=> r.json)
  //   .then((reviews)=> setReviews(reviews))
  // },[])



  return (
    <div className="App">
      <Home />
      <Movies />
    </div>
  );
}

export default App;

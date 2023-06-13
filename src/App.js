import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Movies from "./Movies"
import NavBar from './NavBar'


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
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/movies" element= {<Movies />}/>
      </Routes>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieList from "./MovieList"
import NavBar from './NavBar'


function App() {

  const [movies, setMovies]= useState([])
  const [search, setSearch]= useState("")

  useEffect(()=>{
    fetch("http://localhost:9292/movies")
    .then((r)=> r.json())
    .then((movies)=> setMovies(movies))
    // .then((movies)=> console.log(movies[0].reviews))
  },[])

  if(!movies) return ("Loading...")

  const displayMovies = movies.filter((movie)=>{
    return movie.title.toLowerCase().includes(search.toLowerCase())

  })

  // const displayHeros = heros.filter((hero)=>{
  //   return hero.alias.toLowerCase().includes(searchTerm.toLowerCase())
  // })

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/movies" element= {<MovieList movies ={displayMovies} search ={search} onSearchChange = {setSearch}  />}/>
      </Routes>
    </div>
  );
}

export default App;

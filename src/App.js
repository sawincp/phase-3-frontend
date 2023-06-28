import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieList from "./MovieList"
import NavBar from './NavBar'
import Movie from './Movie'


function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/movies" element= {<MovieList />} />
        <Route path='/movies/:id' element= {<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

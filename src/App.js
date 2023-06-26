import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieList from "./MovieList"
import NavBar from './NavBar'


function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/movies" element= {<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;

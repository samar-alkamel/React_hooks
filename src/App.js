 import React, { useEffect } from "react"
import "./App.css";
import SearchNavbar from "./Components/SearchNavbar/SearchNavbar";
import moviesData from "./Components/moviesData";
import  {useState} from "react";
import MovieList from "./Components/MoviesList/MoviesList";
import Addmovie from "./Components/Addmovie/AddMovie";
import MovieCard from "./Components/MovieCard/MovieCard";

function App() {
  const [moviesList,setMoviesList] =useState(moviesData);
  const [searchInput,setSearchInput] = useState("");
  const [searchRating,setSearchRating]=useState(0);
  const[newMovie,setNewMovie] = useState({});

  useEffect(() =>{
    setMoviesList([...moviesList,newMovie]);
  },[newMovie]);
  
  
    // title:"",
    // description:"",
    // posterUrl:"",
    // rate:0,
    // trailerUrl:"",
  // });
  return (
    <div className="App">
    <SearchNavbar
     setSearchInput= {setSearchInput}
     setSearchRating= {setSearchRating} 
     />
    <MovieList
     moviesList= {moviesList}
     searchInput={searchInput}
     searchRating ={searchRating}
     searchMovie={setNewMovie}
     />
     {/* <Addmovie /> */}
   </div>
 );
}
export default App;
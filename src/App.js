 import React, { useEffect } from "react"
import "./App.css";
import SearchNavbar from "./Components/SearchNavbar/SearchNavbar";
import moviesData from "./Components/moviesData";
import  {useState} from "react";
import MovieList from "./Components/MoviesList/MoviesList";
import Description from "./Description/Description";
import { Route ,Switch } from "react-router-dom";
import { Fragment } from "react";
// import Addmovie from "./Components/Addmovie/AddMovie";
// import MovieCard from "./Components/MovieCard/MovieCard";

function App() {
  const [moviesList,setMoviesList] =useState(moviesData);
  const [searchInput,setSearchInput] = useState(""); 
  const [searchRating,setSearchRating]=useState(0);
  const[newMovie,setNewMovie] = useState({});
  const[firstRender,setFirstRender]= useState(true);

  useEffect(() => {
    !firstRender
    ? setMoviesList([...moviesList,newMovie])
         : console.log("this is the firstrender")
   // eslint-disable-next-line‏
  }, [newMovie]);
  
  return (
    <div className="App">
      <Switch>
        <Route
        exact
        path="/"
        render={() => (
        <Fragment>
    <SearchNavbar
     setSearchInput= {setSearchInput}
     setSearchRating= {setSearchRating} 
     />
    <MovieList
     moviesList= {moviesList}
     searchInput={searchInput}
     searchRating ={searchRating}
     setNewMovie={setNewMovie}
     setFirstRender={setFirstRender}
     />
     </Fragment>
     )}
     />
     <Route 
      path="/movies/:id"
      render={({match})=> (
       <Description match={match}  moviesList={moviesList}/> 
      )}
      />
     </Switch>
   </div>
 );
        }
export default App;
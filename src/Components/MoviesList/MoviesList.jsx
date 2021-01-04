import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Addmovie from "../Addmovie/AddMovie";
import "./MovieList.css";
import { Fragment } from 'react';

const MoviesList=(props)=> {
    const {moviesList,searchInput,searchRating,setNewMovie,setFirstRender} =props  
   // cosloe.log("this data is from movielist component:" , props.MoviesList);
    return (
        <div className="MovieList">
            {/* <!-- eslint-disable-next -line --> */}
          {moviesList.map((movie,index) => movie.rate >=searchRating && movie.title.toUpperCase().startsWith(searchInput.toUpperCase())?
           <MovieCard  movie={movie} key={index}/>
           : <Fragment key ={index}></Fragment>
          )}
          <Addmovie  setNewMovie={setNewMovie} setFirstRender={ setFirstRender}/>
        </div>
    )
}

export default MoviesList
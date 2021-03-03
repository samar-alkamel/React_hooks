import React from 'react';
import MovieCard from '../Card/Card';
import Addmovie from "../Add/Add";
import "./MovieList.css";
import { Fragment } from 'react';

const MoviesList=(props)=> {
    const {moviesList,searchInput,searchRating,setNewMovie,setFirstRender} =props  
   // cosloe.log("this data is from movielist component:" , props.MoviesList);
    return (
        <div className="MovieList">
            {/* <!-- eslint-disable-next -line --> */}
          {List.map((m,index) => m.rate >=searchRating && m.title.toUpperCase().startsWith(searchInput.toUpperCase())?
           <MovieCard  m={m} key={index}/>
           : <Fragment key ={index}></Fragment>
          )}
          <Add  setNewM={setNewM} setFirstRender={ setFirstRender}/>
        </div>
    )
}

export default MoviesList
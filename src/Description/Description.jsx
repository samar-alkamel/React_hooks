import React from 'react'
import "./Description.css"
import {Button} from "react-bootstrap"
import {Link} from 'react-router-dom'


function Description({match,moviesList}){
    const movieData =moviesList.find(item => item.id = match.params.id)
    return(
        <div id="description">
     <iframe title="trailer" width="560" height="315" src={movieData.trailerUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
     <h4 className="descText">{movieData.description}</h4>
     <Link to ="/">
         <Button variant="warning">Go Back"</Button>
         </Link>
        </div>
    )
}

export default Description

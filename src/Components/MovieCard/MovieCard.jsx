import React from 'react';
import{ Card ,Button} from "react-bootstrap"
import "./MovieCard.css"

function MovieCard({movie}) {
    return (
        <Card style={{ width: '18rem',boxShadow:"0 0 10px",height:"33rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="movieImg" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <span className="rateStart">{("⭐").repeat(movie.rate)}</span>
          {/* <Button variant="primary"> Go somewhere </Button>  */}
        </Card.Body>
        <Card.Footer className="cardFooter">
          <Button variant="primary">Trailer</Button>  
        </Card.Footer>
      </Card>
    );
}

export default MovieCard;
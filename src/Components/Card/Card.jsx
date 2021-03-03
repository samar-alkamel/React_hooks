import React from 'react';
import{ Card ,Button} from "react-bootstrap"
import "./Card.css"
import {Link} from "react-router-dom"

function Card({m}) {
    return (
      <Link to={`/m/${m.id}`}  style={{ textDecoration: "none"}}>
        <Card style={{ width: '18rem',boxShadow:"0 0 10px",height:"33rem" }}>
        <Card.Img variant="top" src={m.posterUrl} className="Img" />
        <Card.Body>
          <Card.Title>{m.title}</Card.Title>
          <Card.Text>
            {m.description}
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="cardFooter">
          <Button variant="primary">commentss</Button>  
        </Card.Footer>
      </Card>
      </Link>
    );
}

export default Card;
import { useState } from "react"
import {Navbar ,Nav ,Form  ,FormControl} from "react-bootstrap"
import "./SearchNavbar.css"
import ReactStars from "react-rating-stars-component"
import React from "react"

function SearchNavbar(props){

  // const [SearchInput,setSearchInput] = useState(" ");//

 const handleChange=(e) => {
      props.setSearchInput(e.target.value)
  }
  const ratingChanged =(newRating) =>{
    props.setSearchRating(newRating)
  };
return(
    <Navbar bg="dark" variant="dark" className="SearchNavbar">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline className="SearchArea">
      <FormControl type="text" placeholder="Search" className="mr-sm-2 SearchInput" onChange={handleChange} />
      <ReactStars
    count={5
    }
   onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
  />
    </Form>
  </Navbar>
)
}

 export default SearchNavbar
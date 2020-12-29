import React,{useState} from 'react';
import {Modal,Button, Card, Form} from 'react-bootstrap';
import "./Addmovie.css";
function Addmovie(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[newMovie,setNewMovie] = useState({ title: "", description:"", posterUrl:"", rate: 0, trailerUrl:""})
    // const [newMovie ,setNewMovie]= useState({})

    const handleChange = (e) =>{
          setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
     const handleSubmit =()=>{
       const {title,description,posterUrl,rate,trailerUrl} = newMovie
       if(title && description && posterUrl && rate && trailerUrl){
         props.setNewMovie(newMovie)
         setNewMovie({title:"" ,description:"" ,posterUrl:"",rate: 0, trailerUrl:""})

         handleClose()
       }
       else
       alert("there is an empty filed, Please check again!!")
     }
    return (
      <>
        <Card style={{ width: '18rem',boxShadow:"0 0 10px",color:"green", cursor:"pointer" ,height:"33rem" }} onClick={handleShow}>
          <Card.Body className ="cardBody">
        {/* <Card.Img variant="top" src={movie.posterUrl} className="movieImg" /> */}
            <img src ="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" alt="plus_icon"/>
        </Card.Body>
        </Card>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className="inputArea">
           
           <Form.Control text="text" placeholder="Enter movie title."name="title" onChange={handleChange}/>
           <Form.Control as="textarea" placeholder="Enter movie Description."name="description"onChange={handleChange}/>
           <Form.Control text="text" placeholder="Enter movie poster Url."name="posterUrl"onChange={handleChange}/>
           <Form.Control text="text" placeholder="Enter movie rate."name="rate"onChange={handleChange}/>
           <Form.Control text="text" placeholder="Enter movie trailer Url."name="trailerUrl"onChange={handleChange}/>
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Addmovie
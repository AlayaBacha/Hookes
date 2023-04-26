import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Addmovie =({movies,setMovies}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [discription,setdiscription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)

    const addMovie=()=> setMovies([...movies,{title,discription,posterURL, rating ,id : Math.random()}])
    return(
        <>
        <Button  variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Discription</Form.Label>
          <Form.Control onChange={(e)=> setdiscription(e.target.value)} type="text" placeholder="Enter discription" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control onChange={(e)=> setPosterURL(e.target.value)}type="text" placeholder="Enter posterURL" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>rating</Form.Label>
          <Rating
   
   name="simple-controlled"
        onChange={(e)=>setRating(e.target.value)}
      />
        </Form.Group>


    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie();handleClose()}}>
            Add movies
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default Addmovie
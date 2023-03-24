import React from 'react'

import Card  from 'react-bootstrap/Card';
import {Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const Cardmovie = ({elm},) => {
  const link = `/${elm.title}/${elm.id}`
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={elm.posterURL} />
      <Card.Body>
        <Card.Title className='title'>{elm.title}</Card.Title>
        <Card.Text className='text'>
         {elm.description}
        </Card.Text>
        <Rating initialValue={elm.rating} readonly={true}/>
        <div style={{margin:"20px"}}>
        <Link to={link}>
        <Button variant='dark'>Watch Now !</Button>
        </Link>
        </div>
        
      </Card.Body>
    </Card>
  )
}

export default Cardmovie
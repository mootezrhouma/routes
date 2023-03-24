
import React,{useState} from 'react'
import { NavbarBrand } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
const Filter = (props) => {
    const [rating, setRating] = useState(0)
    
    const handleRating = (rate) => {
        setRating(rate)
       
    }
    props.handleRate(rating)
console.log("raiting:",rating)
return (

<div className='search'>
   <Link to='/' style={{textDecoration:'none'}}><Navbar.Brand style={{color: 'white',
  letterSpacing: '10px',
  fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" , fontSize:"50px"}}> TFAREJ</Navbar.Brand></Link> 
    <Navbar  expand="lg">
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>props.handleFilter(e.target.value)}
        />
       
        <Rating onClick={handleRating} initialValue={rating}/>
        
        </Form>
</Navbar>
</div>

)
}

export default Filter






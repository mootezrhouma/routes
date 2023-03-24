import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form ,Button } from 'react-bootstrap';
import '../App.css'
const AddMovie = (props) => {
    const [input,setInput]=useState([{
    title:"",
    description:'',
    posterURL:'',
    rating:1
}])
    const [show, setShow] = useState(false);
    const handlechange =(e) =>setInput({...input,[e.target.name]:e.target.value})
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    const handleSave =()=>{props.handleAddFilm(input) ; setShow(false)}
return (
<>
{console.log(input)}
<div className='clik ' width="70vh" >
    <Button variant="danger" onClick={handleShow} size="lg">
  Dear watcher add a new movie here !
</Button>   
</div>

<Modal   show={show} onHide={handleClose}>
<Modal.Header className='App' closeButton>
<Modal.Title style={{color:'white'}}>Add new movie</Modal.Title>
</Modal.Header>
<Modal.Body >

<Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Title :</Form.Label>
<Form.Control
        type="text"
        placeholder=""
        name="title"
        onChange={handlechange}
        autoFocus
        />
    </Form.Group>
    <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
    >
        <Form.Label>Description:</Form.Label>
        <Form.Control type='text'
        name="description"
        onChange={handlechange} />
    </Form.Group>
    <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
    >
        <Form.Label>Poster URL:</Form.Label>
        <Form.Control name='posterURL' type='text'onChange={handlechange} />
    </Form.Group>
    <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
    >
        <Form.Label>Rating /5:</Form.Label>
        <Form.Control name='rating' type='text' onChange={handlechange}/>
    </Form.Group>
    </Form>

</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
    Cancel
    </Button>
    <Button variant="danger" onClick={handleSave}>
    Add
    </Button>
</Modal.Footer>
</Modal>
</>
)
}

export default AddMovie


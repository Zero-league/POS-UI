import React,{useState,useEffect} from 'react'
import { Modal,Button,Container,Row,Col,Form} from 'react-bootstrap';

function DeleteModel(props){
    const [id, setID] = useState("");
const handleSubmit =async  (evt) => {

    evt.preventDefault();


    const response = await  fetch(`http://localhost:12517/api/Delet/${props.sendid.id}`,{
          method: 'Delete',
          headers: { 
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
          }
          
      })

      .then(res =>{
        alert("OK");
      })
      .then(result =>{
          
          alert(result);
      }, 
      (error) => {
          alert("Failed");
          
      })
}

return (
        
    <div>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Are you suver! you wan to delete this item
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
      <div className="container" variant="dark">
      <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                
                <Col sm={8}>
                    <Form.Control columntype="text" disabled placeholder="ID" hidden name="ID" defaultValue={`${props.sendid.id}`}/>
                </Col>

                </Form.Group>
              

              <Button variant="primary" type="submit">
                  Delete
          </Button>
          </Form>
      </div>
  </div>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
 
    </div>
)
}

export default DeleteModel
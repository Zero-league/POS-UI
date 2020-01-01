import React,{useState} from 'react'
import { Modal,Button,Container,Row,Col,Form} from 'react-bootstrap';

function EditModel(props) {

    const [ID, setID] = useState("");
    const [itemName, setName] = useState("");
    const [brand, setbrand] = useState("");
    const [expireDate, setexpireDate] = useState("");
    const [qty, setqty] = useState("");
    const [retailPrice, setretailPrice] = useState("");
    const [catogaryName, setcatogaryName] = useState("");
    const [locationName, setlocationName] = useState("");
    const [position, setposition] = useState("");
    const [mesurementName, setmesurementName] = useState("");
    
    const handleSubmit =async  (evt) => {
        
        evt.preventDefault();
        const obj = {
            
            itemName:itemName,
            brand: brand,
            expireDate: expireDate,
            qty: qty,
            retailPrice: retailPrice,
            catogaryName: "",
            locationName: "",
            mesurementName: mesurementName,
            itemCatogaryId: 1,
            itemLocationId: 1,
            unitmesurementId: 1
        };
  
        console.log(ID);
  
        const response = await  fetch(`http://localhost:12517/api/Put/1`,{
              headers: { 
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
              },
              method: 'PUT',
              body: JSON.stringify(obj)
              
          })

          .then(res => res.json())
          .then(data =>{
              
              alert("Data Saved");
          }, (error) => {
              alert("Failed");
              
          })
    }


    return (
        <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <div className="container" variant="dark">
          <div>
              <Form onSubmit={handleSubmit}  >
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={4}>Item Name</Form.Label>
                    <Col sm={8}>
                        <Form.Control columntype="text" placeholder="ID" name="ID" value={props.sendid.id}
                        onChange={e => setID(e.target.value)}/>
                    </Col>

                    </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Item Name</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Item Name" name="itemName" value={props.sendid.itemName}
                          onChange={e => setName(e.target.value)}/>
                      </Col>

                  </Form.Group>
                  
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Brand</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Brand" name="brand" value={props.sendid.brand}
                          onChange={e => setbrand(e.target.value)}/>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Expire Date</Form.Label>
                      <Col sm={8}>
                          <Form.Control type="date" placeholder="Date" name="expireDate" value={props.sendid.expireDate}
                          onChange={e => setexpireDate(e.target.value)}/>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>QTY</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="QTY"  name="itemName" value={props.sendid.qty}
                          onChange={e => setqty(e.target.value)}/>
                      </Col>
   
                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Retail Price</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Retail Price" name="retailPrice" value={props.sendid.retailPrice}
                          onChange={e => setretailPrice(e.target.value)}/>
                      </Col>

                  </Form.Group>
                 
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Item Catogary</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" name="catogaryName" value={props.sendid.catogaryName}
                          onChange={e => setcatogaryName(e.target.value)}>

                          </Form.Control>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Item Location</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" name="locationName" value={props.sendid.locationName}
                          onChange={e => setlocationName(e.target.value)}>

                          </Form.Control>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Unit mesurement</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" name="mesurementName" value={props.sendid.mesurementName}
                          onChange={e => setmesurementName(e.target.value)}>

                          </Form.Control>
                      </Col>

                  </Form.Group>

                  <Button variant="primary" type="submit">
                      Add
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

export default EditModel

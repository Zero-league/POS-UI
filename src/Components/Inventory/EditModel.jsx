import React,{useState,useEffect} from 'react'
import { Modal,Button,Container,Row,Col,Form} from 'react-bootstrap';
import * as moment from 'moment'

    function EditModel(props){

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
    const [listinventory, setlistinventory] = useState([]);

 
    const handleSubmit =async  (evt) => {
        var date= new Date(expireDate)
        evt.preventDefault();
        const obj = {
            
            itemName:itemName,
            expireDate:moment(date,'YYYY-MM-DD'),
            qty: qty,
            brand: brand,
            retailPrice: retailPrice,
            catogaryName: "",
            locationName: "",
            mesurementName: mesurementName,
            itemCatogaryId: 1,
            itemLocationId: 1,
            unitmesurementId: 1
        };
  console.log(expireDate)
  

        const response = await  fetch(`http://localhost:12517/api/Put/${props.sendid.id}`,{
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
function Changevalue() {
    if (itemName === "") {
                                
        setName(`${props.sendid.itemName}`)
    }
    if (brand === "") {
                                
        setbrand(`${props.sendid.brand}`)
    }
    if (expireDate === "") {
                                
        setexpireDate(`${props.sendid.expireDate}`)
    }
    if (qty === "") {
                                
        setqty(`${props.sendid.qty}`)
    }
    if (retailPrice === "") {
                                
        setretailPrice(`${props.sendid.retailPrice}`)
    }
}

    return (
        
        <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Item Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <div className="container" variant="dark">
          <div>
              <Form onSubmit={handleSubmit} onStart={() =>{setbrand("abc")}}>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={4}>Item Name</Form.Label>
                    <Col sm={8}>
                        <Form.Control columntype="text" disabled placeholder="ID" name="ID" defaultValue={`${props.sendid.id}`}
                        onChange={e => setID(e.target.value)}/>
                    </Col>

                    </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Item Name</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Item Name" defaultValue={`${props.sendid.itemName}`}  name="itemName" 
                          onChange={e => setName(e.target.value)}/>
                      </Col>

                  </Form.Group>
                  
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Brand</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Brand" defaultValue={`${props.sendid.brand}`}   name="brand"
                          onChange={e =>setbrand(e.target.value)}  />
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Expire Date</Form.Label>
                      <Col sm={8}>
                          <Form.Control type="date" placeholder="Expire Date" name="expireDate" defaultValue={`${props.sendid.expireDate}`}  
                          onChange={e => setexpireDate(e.target.value)}/>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>QTY</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Quantity" name="qty" defaultValue={`${props.sendid.qty}`}
                          onChange={e => setqty(e.target.value)}/>
                      </Col>
   
                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                      <Form.Label column sm={4}>Retail Price</Form.Label>
                      <Col sm={8}>
                          <Form.Control columntype="text" placeholder="Retail Price" name="retailPrice" defaultValue={`${props.sendid.retailPrice}`}
                          onChange={e => setretailPrice(e.target.value)}/>
                      </Col>

                  </Form.Group>
                 
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Item Catogary</Form.Label>
                      <Col sm={8}>
                          <Form.Control as="select" columntype="text" name="catogaryName" placeholder="Catogary Name" defaultValue={`${props.sendid.catogaryName}`}
                          onChange={e => setcatogaryName(e.target.value)}>
                          <option>{`${props.sendid.catogaryName}`}</option>
                          <option>1</option>
                          </Form.Control>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Item Location</Form.Label>
                      <Col sm={8}>
                          <Form.Control as="select" columntype="text" name="locationName" placeholder="Location Name" defaultValue={`${props.sendid.locationName}`}
                          onChange={e => setlocationName(e.target.value)}>
                          <option>{`${props.sendid.locationName}`}</option>
                          <option>1</option>
                          </Form.Control>
                      </Col>

                  </Form.Group>
                  <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                      <Form.Label column sm={4}>Unit mesurement</Form.Label>
                      <Col sm={8}>
                          <Form.Control as="select" columntype="text" name="mesurementName" placeholder="Mesurement Name" defaultValue={`${props.sendid.mesurementName}`}
                          onChange={e => setmesurementName(e.target.value)}>
                          <option>{`${props.sendid.mesurementName}`}</option>
                          <option>1</option>
                          </Form.Control>
                      </Col>
                  </Form.Group>

                  <Button onClick={Changevalue} variant="primary" type="submit">
                      Save
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

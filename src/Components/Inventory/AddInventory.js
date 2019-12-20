import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


    

    
 function AddInventoryModal() {

    //const counter = useSelector(state => state);
   // const dispatch = useDispatch();
  
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
  
        console.log(obj);
  
        const response = await  fetch('http://localhost:12517/api/post',{
              headers: { 
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
              },
              method: 'POST',
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

       
        <div className="container" variant="dark">
            <div>
                <Form onSubmit={handleSubmit} >
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm={2}>Item Name</Form.Label>
                        <Col sm={4}>
                            <Form.Control columntype="text" placeholder="Item Name" name="itemName" value={itemName}
                            onChange={e => setName(e.target.value)}/>
                        </Col>

                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm={2}>Brand</Form.Label>
                        <Col sm={4}>
                            <Form.Control columntype="text" placeholder="Brand" name="brand" value={brand}
                            onChange={e => setbrand(e.target.value)}/>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm={2}>Expire Date</Form.Label>
                        <Col sm={4}>
                            <Form.Control type="date" placeholder="Date" name="expireDate" value={expireDate}
                            onChange={e => setexpireDate(e.target.value)}/>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm={2}>QTY</Form.Label>
                        <Col sm={4}>
                            <Form.Control columntype="text" placeholder="QTY" v name="itemName"alue={qty}
                            onChange={e => setqty(e.target.value)}/>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm={2}>Retail Price</Form.Label>
                        <Col sm={4}>
                            <Form.Control columntype="text" placeholder="Retail Price" name="retailPrice" value={retailPrice}
                            onChange={e => setretailPrice(e.target.value)}/>
                        </Col>

                    </Form.Group>
                   
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                        <Form.Label column sm={2}>Item Catogary</Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" name="catogaryName" value={catogaryName}
                            onChange={e => setcatogaryName(e.target.value)}>

                            </Form.Control>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                        <Form.Label column sm={2}>Item Location</Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" name="locationName" value={locationName}
                            onChange={e => setlocationName(e.target.value)}>

                            </Form.Control>
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                        <Form.Label column sm={2}>Unit mesurement</Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" name="mesurementName" value={mesurementName}
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

    )
}


export default AddInventoryModal

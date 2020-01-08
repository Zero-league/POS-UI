import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Modal, Container } from 'react-bootstrap';






function AddInventory(props) {

    //const counter = useSelector(state => state);
    // const dispatch = useDispatch();

    const [itemName, setName] = useState("");
    const [brand, setbrand] = useState("");
    const [expireDate, setexpireDate] = useState("");
    const [qty, setqty] = useState("");
    const [retailPrice, setretailPrice] = useState("");
    const [catogaryName, setcatogaryName] = useState();
    const [locationName, setlocationName] = useState();
    const [position, setposition] = useState("");
    const [mesurementName, setmesurementName] = useState();
    const [listCAtogary, setlistCAtogary] = useState([]);
    const [listLocation, setlistLocation] = useState([]);
    const [listMesurement, setlistMesurement] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:44361/api/Catagaries`)
            .then(x => x.json())
            .then(x => {
                setlistCAtogary(x)
            })

        fetch(`http://localhost:44361/api/Locations`)
            .then(y => y.json())
            .then(y => {
                setlistLocation(y)
            })

        fetch(`http://localhost:44361/api/Unitmesurements`)
            .then(z => z.json())
            .then(z => {
                setlistMesurement(z)
            })


    }, []);
    const handleSubmit = async (evt) => {

        evt.preventDefault();
        const obj = {

            itemName: itemName,
            brand: brand,
            expireDate: expireDate,
            qty: qty,
            retailPrice: retailPrice,
            catogaryName: "",
            locationName: "",
            mesurementName: "",
            itemCatogaryId: catogaryName,
            itemLocationId: locationName,
            unitmesurementId: mesurementName
        };

        console.log(obj);

        const response = await fetch('https://localhost:44361/api/post', {
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            body: JSON.stringify(obj)

        })
            .then(res => res.json())
            .then(data => {

                alert("Data Saved");
            }, (error) => {
                alert("Failed");

            })
    }

    return (


        <div className="container" variant="dark">
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add item to inventory
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <div>

                            <Form onSubmit={handleSubmit} >


                                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                    <Form.Label column sm={4}>Item Name</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control columntype="text" placeholder="Item Name" name="itemName" value={itemName}
                                            onChange={e => setName(e.target.value.toString())} />
                                    </Col>

                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                    <Form.Label column sm={4}>Brand</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control columntype="text" placeholder="Brand" name="brand" value={brand}
                                            onChange={e => setbrand(e.target.value.toString())} />
                                    </Col>

                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                    <Form.Label column sm={4}>Expire Date</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="date" placeholder="Date" name="expireDate" value={expireDate}
                                            onChange={e => setexpireDate(e.target.value.toString())} />
                                    </Col>

                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                    <Form.Label column sm={4}>QTY</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control columntype="text" placeholder="QTY" v name="itemName" alue={qty}
                                            onChange={e => setqty(e.target.value)} />
                                    </Col>

                                </Form.Group>
                                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                    <Form.Label column sm={4}>Retail Price</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control columntype="text" placeholder="Retail Price" name="retailPrice" value={retailPrice}
                                            onChange={e => setretailPrice(e.target.value)} />
                                    </Col>

                                </Form.Group>



                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={4}>Item Catogary</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" name="catogaryName"
                                            onClick={e => setcatogaryName(e.target.value)}>
                                            {listCAtogary.map(cat =>

                                                <option key={cat.id} value={cat.id}>{cat.catogaryName}</option>

                                            )}
                                        </Form.Control>
                                    </Col>

                                </Form.Group>


                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={4}>Item Location</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" name="locationName"
                                            onClick={e => setlocationName(e.target.value)}>
                                            {listLocation.map(lo =>
                                                <option key={lo.id} value={lo.id}>{lo.locationName}</option>
                                            )}
                                        </Form.Control>
                                    </Col>

                                </Form.Group>


                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={4}>Unit mesurement</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" name="mesurementName"
                                            onClick={e => setmesurementName(e.target.value)}>
                                            {listMesurement.map(un =>
                                                <option key={un.id} value={un.id} >{un.mesurementName}</option>
                                            )}
                                        </Form.Control>
                                    </Col>

                                </Form.Group>

                                <Button variant="primary" type="submit">Add</Button>


                            </Form>

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


export default AddInventory

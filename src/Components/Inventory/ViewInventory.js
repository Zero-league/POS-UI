import React, {useState, useEffect} from 'react'
import { Table,Button,ButtonToolbar} from 'react-bootstrap';
import  EditModel  from './EditModel';

function ViewInventory() {
  const [id, setid] = useState("");
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
    const [modalShow, setModalShow] = useState(false);
   

    useEffect(() => {
        
        fetch("http://localhost:12517/api/Inventories")
        .then(x => x.json())
        .then(x => {
            setlistinventory(x)
        })
    }, []);

   function abc() {
    setModalShow(true)
   }
   function idset(id) {
    setid(id)
  }
   let p ={
     id :id,
     itemName:itemName,
     brand:brand,
     expireDate:expireDate,
     qty:qty,
     retailPrice:retailPrice,
     catogaryName:catogaryName,
     locationName:locationName,
     position:position,
     mesurementName:mesurementName
   }
    return (
        <div>
        <h6>Inventory</h6>
        <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Brand</th>
            <th>Expire Date</th>
            <th>QTY</th>
            <th>Retail Price</th>
            <th>Item Catogary</th>
            <th>Item Location</th>
            <th>Position</th>
            <th>Unit Mesurement</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {listinventory.map(y => 
            <tr key = {y.id}>
                <td>{y.id}</td>
                <td>{y.itemName}</td>
                <td>{y.brand}</td>
                <td>{y.expireDate}</td>
                <td>{y.qty}</td>
                <td>{y.retailPrice}</td>
                <td>{y.catogaryName}</td>
                <td>{y.locationName}</td>
                <td>{y.position}</td>
                <td>{y.mesurementName}</td>
                <td>
                <ButtonToolbar>
                <Button variant="warning" onClick={() =>{idset(y.id);abc();setName(y.itemName);setbrand(y.brand);setexpireDate(y.expireDate);setqty(y.qty);
                  setretailPrice(y.retailPrice);setcatogaryName(y.catogaryName);setlocationName(y.locationName);setposition(y.position);setmesurementName(y.mesurementName)}}>Edit</Button>
                <EditModel show={modalShow} sendid={p} onHide={() => setModalShow(false)} />
              </ButtonToolbar>
                </td>
                <td><Button variant="danger">Delete</Button></td>
            </tr>
            )}
        </tbody>
      </Table>
        </div>
    )
}

export default ViewInventory

import React, {useState, useEffect} from 'react'
import { Table,Button,ButtonToolbar} from 'react-bootstrap';
import  EditModel  from './EditModel';
import  DeleteModel  from './DeleteModel';
import  AddInventory  from './AddInventory';
import * as moment from 'moment'

function ViewInventory() {
  const [id, setid] = useState("");
  const [itemName, setName] = useState("");
    const [brand, setbrand] = useState("");
    const [expireDate, setexpireDate] = useState("");
    const [qty, setqty] = useState("");
    const [retailPrice, setretailPrice] = useState("");
    const [catogaryName, setcatogaryName] = useState("");
    const [locationName, setlocationName] = useState("");
    const [mesurementName, setmesurementName] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [AddinventoryModel, setAddinventoryModel] = useState(false);
    const [listinventory, setlistinventory] = useState([]);
    const [deletemodalShow, setdeletemodalShoww] = useState(false);
   

    useEffect(() => {
      
        fetch(`http://localhost:44361/api/Inventories`)
        .then(x => x.json())
        .then(x => {
            setlistinventory(x)
        })
    }, []);

   function abc() {
    setModalShow(true)
   }

   function deleteitem(){
    setdeletemodalShoww(true)
   }
   function Addteitem(){
    setAddinventoryModel(true)
   }

   function idset(id) {
    setid(id)
  }
  var date = new Date(expireDate)
   let p ={
     id :id,
     itemName:itemName,
     brand:brand,
     expireDate: moment(date).format('YYYY-MM-DD'),
     qty:qty,
     retailPrice:retailPrice,
     catogaryName:catogaryName,
     locationName:locationName,
     mesurementName:mesurementName
   }
    return (
      
        <div>
        <h6>Inventory</h6>
        <ButtonToolbar>
        <Button variant="primary" onClick={() =>{Addteitem()}}>Add Item</Button>
        <AddInventory show={AddinventoryModel}  onHide={() => setAddinventoryModel(false)} />
        </ButtonToolbar>
        <br/>
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
                <td>{moment(y.expireDate).format('MM-DD-YYYY')}</td>
                <td>{y.qty}</td>
                <td>{y.retailPrice}</td>
                <td>{y.catogaryName}</td>
                <td>{y.locationName}</td>
                <td>{y.mesurementName}</td>
                
                <td>
                <ButtonToolbar>
                <Button variant="warning" onClick={() =>{idset(y.id);abc();setName(y.itemName);setbrand(y.brand);setexpireDate(y.expireDate);setqty(y.qty);
                  setretailPrice(y.retailPrice);setcatogaryName(y.catogaryName);setlocationName(y.locationName);
                  setmesurementName(y.mesurementName)}}>Edit</Button>
                <EditModel show={modalShow} sendid={p} onHide={() => setModalShow(false)} />
              </ButtonToolbar>
                </td>
                <td>
                <ButtonToolbar>
                <Button variant="danger" onClick={() =>{idset(y.id);deleteitem()}}>Delete</Button>
                <DeleteModel show={deletemodalShow} sendid={p} onHide={() => setdeletemodalShoww(false)} />
              </ButtonToolbar>
              </td>
            </tr>
            )}
        </tbody>
      </Table>
        </div>
    )
}

export default ViewInventory

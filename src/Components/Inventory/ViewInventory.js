import React, {useState, useEffect} from 'react'
import { Table} from 'react-bootstrap';
function ViewInventory() {
    const [listinventory, setlistinventory] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:12517/api/Inventories")
        .then(x => x.json())
        .then(x => {
            setlistinventory(x)
        })
    }, []);

    return (
        <div>
        <Table striped bordered hover variant="dark">
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
            </tr>
            )}
        </tbody>
      </Table>
        </div>
    )
}

export default ViewInventory

import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap';

function ViewSales() {

    const [listSales, setlistSales] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:12517/api/bills")
        .then(x => x.json())
        .then(x => {
            setlistSales(x)
        })
    }, []);

    return(
        <div>
            <div className="container">
                <h6 style={{margin:20}}>Bills List</h6>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Dicount</th>
                        <th scope="col">Gross Amount</th>
                        <th scope="col">Net Amount</th>
                        <th scope="col">Sales Person</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSales.map(y => 
                        <tr key = {y.id}>
                            <th>{y.id}</th>
                            <td>{y.dateTime}</td>
                            <td>{y.discount}</td>
                            <td>{y.groceAmount}</td>
                            <td>{y.netAmount}</td>
                            <td>{y.salesPerson}</td>
                            <td><Button variant="info">View</Button></td>
                            <td><Button variant="warning">Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                        )}

                    </tbody>
                </Table>
                
            </div>
        </div>
    );
}

export default ViewSales;
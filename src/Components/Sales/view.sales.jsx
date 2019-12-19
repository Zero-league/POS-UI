import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

function ViewSales() {

    const [listSales, setlistSales] = useState([]);

    useEffect(() => {
        
        fetch("https://localhost:44361/api/bills")
        .then(x => x.json())
        .then(x => {
            setlistSales(x)
        })
    }, []);

    return(
        <div>
            <div className="container">
                <h2 style={{margin:20}}>Bills List</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Dicount</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Sales Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSales.map(y => 
                        <tr key = {y.id}>
                            <th>{y.id}</th>
                            <td>{y.dateTime}</td>
                            <td>{y.discount}</td>
                            <td>{y.amount}</td>
                            <td>{y.salesPerson}</td>
                        </tr>
                        )}

                    </tbody>
                </Table>
                
            </div>
        </div>
    );
}

export default ViewSales;
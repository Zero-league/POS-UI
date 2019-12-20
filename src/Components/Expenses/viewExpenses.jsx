import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ViewExpenses = () =>{
    const[listExpenses, setListExpenses] = useState([]);

    // const _onChange = (e) => {
    //     onchange(e.target.value);
    // }

    useEffect(() =>{
        fetch('http://localhost:53389/api/expense')
        .then(x => x.json())
        .then(x => {
            setListExpenses(x);
            console.log(x);
        })
    }, []);

    return(
        <div>
            <h5>All Expenses</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ExpId</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Payment</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>

                <tbody style={{ justifyContent:"center" }}>
                    {listExpenses.map(y => 
                        <tr key = {y.expId}>
                            <td>{y.expId}</td>
                            <td>{y.name}</td>
                            <td>{y.date}</td>
                            <td>{y.payment}</td>
                            <td><Button variant="warning">Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                    )}
                </tbody>
                
            </Table>
        </div>
    );
}

export default ViewExpenses;
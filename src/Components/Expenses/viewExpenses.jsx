import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const ViewExpenses = () =>{
    const[listExpenses, setListExpenses] = useState([]);

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
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ExpId</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {listExpenses.map(y => 
                        <tr key = {y.expId}>
                            <td>{y.expId}</td>
                            <td>{y.name}</td>
                            <td>{y.date}</td>
                            <td>{y.payment}</td>
                        </tr>
                    )}
                    
                    
                    
                </tbody>
            </Table>
        </div>
    );
}

export default ViewExpenses;
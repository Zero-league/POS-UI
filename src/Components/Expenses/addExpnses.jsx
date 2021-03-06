import React, { useState } from "react";
import InputFields from './InputFields';
import Button from 'react-bootstrap/Button';

const AddExpense = () => {
    const [expenseType, setexpenseType] = useState('');
    const [date, setdate] = useState('');
    const [payment, setpayment] = useState('');
    

    const _onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            expenseType: expenseType,
            Date: date,
            Payment: payment,
            
        };
        console.log(data);
        const response = await fetch('http://localhost:44361/api/expense', {
          headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        console.log(response.status);
    }
    

    return (
        <>
            <h6>Add an Expense</h6>
            <div className="row" style={{ display: "flex", justifyContent:"center" }}>
                <div className="col-4">
                    <form onSubmit={_onSubmit}>
                        <InputFields
                            name="expenseType"
                            label="expenseType"
                            value={expenseType}
                            onChange={setexpenseType}
                        />
                        <InputFields
                            name="date"
                            label="Date"
                            value={date}
                            onChange={setdate}
                        />
                        <InputFields
                            name="payment"
                            label="Payment"
                            value={payment}
                            onChange={setpayment}
                        />
                        <Button variant="primary" type="submit">Add</Button>
                        {/* <input type="submit" value="CLICK" /> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddExpense;
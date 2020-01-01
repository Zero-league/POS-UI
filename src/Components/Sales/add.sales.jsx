import React, {useState, useEffect} from 'react';
import {Form, Button, Row, Col, Table} from 'react-bootstrap';

function AddSale(props) {

  constructor() {

  // handleSubmit=(event)=>{
  //   event.preventDefault();
    
  //   var obj = {
       
  //   }
  //}
   //onSubmit={handleSubmit}

  return (
    <div className="container" style={{margin: 20}}>
      <div>
        <Form>
          <div>
            <Form.Group as={Row} controlId="formHorizontalDate">
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="date" placeholder="Date" value="date"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalItem">
              <Form.Label column sm={2}>
                Item Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text" placeholder="Item Name" value="itemName"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>
                Retail Price
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="text" placeholder="Retail Price" value="retailPrice"/>
              </Col>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Row} s="4" controlId="formHorizontalQty">
                <Form.Label column >
                  Quantity
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Quantity" style={{marginLeft: 30}} value="qty"/>
                </Col>
              </Form.Group>
              <Form.Group as={Col} s="4">
                <Col>
                </Col>
              </Form.Group>
              <Form.Group as={Col} s="4">
                <Col>
                  <Button type="submit">Add to Bill</Button>
                </Col>
              </Form.Group>
            </Form.Row>
          </div>
          
           <div>
            <Table striped bordered hover size="sm" style={{backgroundColor:'#f3f3f3'}}>
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Retail Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Form>
      </div>
      
      <div>
        <Form>
          <Form.Row>
          <Form.Group as={Row} s="4" controlId="formHorizontalGrossAmount">
              <Form.Label column >
                Gross Amount
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Gross Amount" style={{marginLeft: 20}} value="grossAmount" readOnly/>
              </Col>
            </Form.Group>
            <Form.Group as={Col} s="4">
              <Col>
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row} s="4" controlId="formHorizontalSalesPerson">
              <Form.Label column >
                Sales Person
              </Form.Label>
              <Col>
                <Form.Control type="salesPerson" placeholder="Sales Person" />
              </Col>
            </Form.Group> */}
        </Form.Row>
        
          <Form.Group as={Row} controlId="formHorizontalDiscount">
            <Form.Label column sm={2}>
              Discount
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" placeholder="Discount" value="discount" readOnly/>
            </Col>
          </Form.Group> 

          <Form.Group as={Row} controlId="formHorizontalNetAmount">
            <Form.Label column sm={2}>
              Net Amount
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" placeholder="Net Amount" value="netAmount" readOnly/>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
    
  );
}

export default AddSale;
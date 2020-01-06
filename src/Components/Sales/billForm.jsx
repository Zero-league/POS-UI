import React, {useState, useEffect} from 'react';
import {Form, Button, Row, Col, Table} from 'react-bootstrap';


function billForm(props) {

    <div className="container" style={{margin: 20}}>

        <Form>
          <div>
            <Form.Group as={Row} controlId="formHorizontalDate">
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="date" placeholder={Date} value={date}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalItem">
              <Form.Label column sm={2}>
                Item Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text" placeholder="Item Name" value={name}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>
                Retail Price
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="text" placeholder="Retail Price" value={price}/>
              </Col>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Row} s="4" controlId="formHorizontalQty">
                <Form.Label column >
                  Quantity
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Quantity" value={quantity} style={{marginLeft: 30}}/>
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

}

export default billForm;
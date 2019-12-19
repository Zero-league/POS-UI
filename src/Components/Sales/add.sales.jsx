import React from 'react';
import {Form, Button, Row, Col, Table} from 'react-bootstrap';

function AddSale(props) {
  return (
    <div className="container" style={{margin: 20}}>
      <div>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalDate">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="date" placeholder="Date" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalItem">
            <Form.Label column sm={2}>
              Item Name
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="item" placeholder="Item Name" />
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Row} s="4" controlId="formHorizontalQty">
              <Form.Label column >
                Quantity
              </Form.Label>
              <Col>
                <Form.Control type="qty" placeholder="Quantity" style={{marginLeft: 30}} />
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
           
        </Form>
      </div>
      <div>
        <Table striped bordered hover size="sm" style={{backgroundColor:'#f6c3e5'}}>
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
      <div>
        <Form>
          <Form.Row>
          <Form.Group as={Row} s="4" controlId="formHorizontalGrossAmount">
              <Form.Label column >
                Gross Amount
              </Form.Label>
              <Col>
                <Form.Control type="grossAmount" placeholder="Gross Amount" style={{marginLeft: 20}} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} s="4">
              <Col>
              </Col>
            </Form.Group>
            <Form.Group as={Row} s="4" controlId="formHorizontalSalesPerson">
              <Form.Label column >
                Sales Person
              </Form.Label>
              <Col>
                <Form.Control type="salesPerson" placeholder="Sales Person" />
              </Col>
            </Form.Group>
        </Form.Row>
        
          <Form.Group as={Row} controlId="formHorizontalDiscount">
            <Form.Label column sm={2}>
              Discount
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="discount" placeholder="Discount" />
            </Col>
          </Form.Group> 

          <Form.Group as={Row} controlId="formHorizontalNetAmount">
            <Form.Label column sm={2}>
              Net Amount
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="netAmount" placeholder="Net Amount" />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
    
  );
}

export default AddSale;
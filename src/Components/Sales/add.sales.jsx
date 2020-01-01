import React, {useState, useEffect} from 'react';
import {Form, Button, Row, Col, Table} from 'react-bootstrap';

class AddSale extends React.Component {
  
  constructor() {
    super();

    this.state = {
      itemName: '',
      price: '',
      quantity: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({itemName: this.state.itemName, price: this.state.price, quantity: this.state.quantity});

    this.setState({
      items,
      itemName: '',
      price: '',
      quantity: '',
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {

    return(
    <div>

      <div className="App">
        <Form1 handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newItemName={ this.state.itemName } newPrice={ this.state.price } newQuantity={ this.state.quantity }/>
        <Table1 items={ this.state.items }/>
      </div>

    </div>

  );
  }
}

class Form1 extends React.Component {
  render() {
    return (
      <div id="Form" className="container" style={{margin: 20}}>
        <Form onSubmit={this.props.handleFormSubmit}>
          <div>
            {/* <Form.Group as={Row} controlId="formHorizontalDate">
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="date" placeholder={Date} value={date}/>
              </Col>
            </Form.Group> */}

            <Form.Group as={Row} controlId="formHorizontalItem">
              <Form.Label column sm={2}>
                Item Name
              </Form.Label>
              <Col sm={4}>
                <input id="itemName" value={this.props.newItemName} type="text" name="itemName" onChange={this.props.handleInputChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>
                Retail Price
              </Form.Label>
              <Col sm={2}>
                <input id="price" value={this.props.newPrice} type="text" name="price" onChange={this.props.handleInputChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalQty">
                <Form.Label column sm={2} >
                  Quantity
                </Form.Label>
                <Col sm={2}>
                <input id="quantity" value={this.props.newQuantity} type="text" name="quantity" onChange={this.props.handleInputChange}/>
              </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col>
                  <Button type="submit">Add to Bill</Button>
                </Col>
              </Form.Group>
          </div>
          
          
        </Form>
      </div>
    );
  }
}

class Table1 extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div>
      <Table id="Table" striped bordered hover size="sm" style={{backgroundColor:'#f3f3f3'}}>
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Retail Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map( item => { 
          return(
            <tr>
            <td>{item.itemName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price*item.quantity}</td>
          </tr>
          );  
        })}
        </tbody>
      </Table>
    </div>
    );
  }
}

export default AddSale;
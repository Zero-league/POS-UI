import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

class AddSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      itemName: "",
      price: "",
      quantity: "",
      items: [],
      totalAmount: "",
      tot: "",
      x: "",
      discount: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    let tot = this.state.price * this.state.quantity;
    this.state.x = +this.state.x + +tot;
    console.log("tot is" + tot);

    items.push({
      itemName: this.state.itemName,
      price: this.state.price,
      quantity: this.state.quantity
    });

    this.setState({
      items,
      itemName: "",
      price: "",
      quantity: "",
      tot: this.state.x,
      discount: ""
    });
  };

  addPrice = e => {
    this.setState({
      totalAmount: e.target.value
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  // discountHandleInputChange = (e) => {
  //   this.setState({
  //     discount: e.target.discount
  //   })
  // };

  render() {
    return (
      <div>
        <div className="App">
          <div>
            <Form1
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newItemName={this.state.itemName}
            newPrice={this.state.price}
            newQuantity={this.state.quantity}
          />
          <Table1
            items={this.state.items}
            tot={this.state.tot}
            newDiscount={this.state.discount}
          />
          </div>  
        </div>
        <div className="container" style={{display: 'flex'}}>
          <div style={{justifyContent: 'flex-end'}}>
            <Button variant="success" type="submit">Print</Button>
          </div>
        </div> 
      </div>
    );
  }
}

class Form1 extends React.Component {
  render() {
    return (
      <div id="Form" className="container" style={{ margin: 20 }}>
        <Form onSubmit={this.props.handleFormSubmit}>
          <div>
            <Form.Group as={Row} controlId="formHorizontalDate">
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalItem">
              <Form.Label column sm={2}>
                Item Name
              </Form.Label>
              <Col sm={4}>
                <input
                  id="itemName"
                  value={this.props.newItemName}
                  type="text"
                  name="itemName"
                  onChange={this.props.handleInputChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>
                Retail Price
              </Form.Label>
              <Col sm={2}>
                <input
                  id="price"
                  value={this.props.newPrice}
                  type="text"
                  name="price"
                  onChange={this.props.handleInputChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalQty">
              <Form.Label column sm={2}>
                Quantity
              </Form.Label>
              <Col sm={2}>
                <input
                  id="quantity"
                  value={this.props.newQuantity}
                  type="text"
                  name="quantity"
                  onChange={this.props.handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col></Col>
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
    const tot = this.props.tot;
    const discount = this.props.discount;
    console.log(this.props.tot);

    return (
      <div>
        <Table
          id="Table"
          striped
          bordered
          hover
          size="sm"
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Retail Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              );
            })}

            <tr>
              <th colSpan="3">Gross Amount</th>
              <th>{tot}</th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AddSale;

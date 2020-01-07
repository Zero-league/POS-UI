import React from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

class AddSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      date: "",
      itemName: "",
      price: "",
      quantity: "",
      items: [],
      totalAmount: "",
      tot: "",
      x: "",
      discount: "",
      netAmount: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    let tot = this.state.price * this.state.quantity;
    this.state.x = +this.state.x + +tot;
    console.log("tot is " + tot);
    console.log("grossAmount is " + this.state.x);

    this.state.id = +this.state.id + 1;

    items.push({
      id: this.state.id,
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
      id: this.state.id
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

  discountHandleInputChange = e => {
    let discount = this.state.discount;
    this.setState({
      discount: e.target.value
    });
    console.log(e.target.value);
  };

  discountHandleInputSubmit = e => {
    let discount = this.state.discount;
    this.state.netAmount = (+this.state.x * (100 - +discount)) / 100;
    console.log("netAmount is " + this.state.netAmount);

    this.setState({
      discount: e.target.value,
      netAmount: this.state.netAmount
    });
    console.log(discount);
  };

  render() {
    return (
      <div style={{ width: "80%" }}>
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
              netAmount={this.state.netAmount}
              discountHandleInputChange={this.discountHandleInputChange}
              discountHandleInputSubmit={this.discountHandleInputSubmit}
              newDiscount={this.state.discount}
            />
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ justifyContent: "flex-end" }}>
            <Button variant="success" type="submit">
              Print
            </Button>
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
            <Form.Group as={Row} controlId="Date">
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Item">
              <Form.Label column sm={2}>
                Item Name
              </Form.Label>
              <Col sm={4}>
                <input
                  id="itemName"
                  value={this.props.newItemName}
                  type="text"
                  name="itemName"
                  placeholder="Item Name"
                  onChange={this.props.handleInputChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Price">
              <Form.Label column sm={2}>
                Retail Price
              </Form.Label>
              <Col sm={2}>
                <input
                  id="price"
                  value={this.props.newPrice}
                  type="text"
                  name="price"
                  placeholder="Retail Price"
                  onChange={this.props.handleInputChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Qty">
              <Form.Label column sm={2}>
                Quantity
              </Form.Label>
              <Col sm={2}>
                <input
                  id="quantity"
                  value={this.props.newQuantity}
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
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
    const netAmount = this.props.netAmount;
    const discount = this.props.newDiscount;
    console.log(this.props.tot);

    return (
      <div className="container">
        <Table
          id="Table"
          striped
          bordered
          hover
          size="sm"
          style={{
            backgroundColor: "#f3f3f3",
            columnWidth: "200px"
          }}
        >
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
            {items.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              );
            })}
            <tr>
              <td>#</td>
              <th colSpan="3">Gross Amount</th>
              <th>{tot}</th>
            </tr>
            <tr>
              <td></td>
              <td colSpan="3">Discount</td>
              <td>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  onChange={event =>
                    this.props.discountHandleInputChange(event)
                  }
                  placeholder={
                    this.props.newDiscount === ""
                      ? "Discount"
                      : this.props.newDiscount
                  }
                />
                %
                <Button
                  type="submit"
                  onClick={this.props.discountHandleInputSubmit}
                  style={{
                    marginLeft: 10,
                    backgroundColor: "white",
                    color: "black"
                  }}
                >
                  Add
                </Button>
              </td>
            </tr>
            <tr>
              <td>#</td>
              <th colSpan="3">Net Amount</th>
              <th>{netAmount}</th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AddSale;

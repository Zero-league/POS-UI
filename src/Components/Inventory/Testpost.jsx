import React, { Component } from 'react'
class Testpost extends Component {
    constructor(props) {
        super(props)
        this.state={
            itemName:"",
            ExpireDate: "",
            QTY: "",
            Brand: "",
            RetailPrice: "",
            ItemCatogaryId: 1,
            ItemLocationId: 1,
            UnitmesurementId: 1
        }
    }
    changehandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = e => {
        e.preventDeault()
        console.log(this.state)

    }
    render() {
        const {ItemName,ExpireDate,QTY,Brand,RetailPrice,ItemCatogaryId,ItemLocationId,UnitmesurementId} = this.state
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input type="text" name="ItemName" value={this.state.ItemName} onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="Brand" value={this.state.Brand}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="ExpireDate" value={this.state.ExpireDate}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="QTY" value={this.state.QTY}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="RetailPrice" value={this.state.RetailPrice}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="ItemCatogaryId" value={this.state.ItemCatogaryId}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="ItemLocationId" value={this.state.ItemLocationId}onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="UnitmesurementId" value={this.state.UnitmesurementId}onChange={this.changehandler}/>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
          </form>
            </div>
        )
    }
}
export default  Testpost

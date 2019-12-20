import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import AddInventory from './Inventory/AddInventory'
import ViewInventory from './Inventory/ViewInventory'
import Testpost from './Inventory/Testpost'

class Inventory extends Component{
    render(){
        return(
            <div className="Sales">
            <div className="container" style={{margin:40}}>
                <Tabs className="tabStyle" defaultActiveKey="addSale">
                    <Tab eventKey="addSale" title="Add Inventory">
                    <AddInventory/>
                    </Tab>
                    <Tab eventKey="viewSales" title="View Inventory" style={{backgroundColor:''}}>
                   
                    <ViewInventory/>
                    </Tab>
                </Tabs>
            </div>
        </div>
        )
    };
}

export default Inventory;
import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import AddInventory from './Inventory/AddInventory'
import ViewInventory from './Inventory/ViewInventory'

class Inventory extends Component{
    render(){
        return(
            <div className="Sales">
            <div className="container" style={{margin:40}}>
                <Tabs className="tabStyle" defaultActiveKey="viewSales">
                    <Tab eventKey="viewSales" title="View Inventory" style={{backgroundColor:''}}>
                    <ViewInventory/>
                    </Tab>
                    <Tab eventKey="viewSales" title="Item Catogary" style={{backgroundColor:''}}>
                    
                    </Tab>
                    <Tab eventKey="viewSales" title="Item Location" style={{backgroundColor:''}}>
                    
                    </Tab>
                </Tabs>
            </div>
        </div>
        )
    };
}

export default Inventory;
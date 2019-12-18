import React from 'react';
import './Sales/sales.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';

import ViewSale from './Sales/view.sales';
import AddSale from './Sales/add.sales';

function Sales() {

    return(
        <div className="Sales">
            <div className="container" style={{margin:40}}>
                <Tabs className="tabStyle" defaultActiveKey="addSale">
                    <Tab eventKey="addSale" title="Add Sale">
                        <AddSale/>
                    </Tab>
                    <Tab eventKey="viewSales" title="View Sales" style={{backgroundColor:'#f6c3e5'}}>
                        <ViewSale/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Sales;
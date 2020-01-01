import React, { useState,useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import gro from './Images/gro.jpg';

import ViewExpenses from './Expenses/viewExpenses';
import AddExpenses from './Expenses/addExpnses';

const Expenses = () =>{
    
        return(
            <div className="container" style={{margin: 40}}>
               <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                <Tab eventKey="view" title="View Expenses">
                    <ViewExpenses/>
                    
                </Tab>
                <Tab eventKey="add" title="Add Expenses">
                    <AddExpenses />
                </Tab>
                {/* <img src={gro}/> */}
            </Tabs>
            </div>
        )
};


export default Expenses;
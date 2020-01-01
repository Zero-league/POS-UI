import React, { useState,useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import gro from './Images/gro.jpg';

import ViewExpenses from './Expenses/viewExpenses';
import AddExpenses from './Expenses/addExpnses';

const Expenses = () =>{
    
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <h1>Expenses</h1>
               <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
                <Tab eventKey="view" title="View">
                    <ViewExpenses/>
                    
                </Tab>
                <Tab eventKey="add" title="Add">
                    <AddExpenses />
                </Tab>
                {/* <img src={gro}/> */}
            </Tabs>
            </div>
        )
};


export default Expenses;
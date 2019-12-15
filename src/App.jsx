import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Divider from '@material-ui/core/Divider';
import  Main  from './Components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
         <Header className="header-color" title="Point of Sale" style={{backgroundColor: '#2d132c', fontSize: 30}} scroll>
            <Navigation> 
                <a href="/"><h6>DashBoard</h6></a>
                <a href="/sales"><h6>Sales & Billing</h6></a>
                <a href="/inventory"><h6>Inventory</h6></a>
                <a href="/expenses"><h6>Expenses</h6></a>
                <a href="/report"><h6>Reports</h6></a>
            </Navigation>
        </Header>
        <Drawer title="Point of Sale" style={{backgroundColor: '#2d132c', color: 'white'}}>
            <Divider variant="middle" />
            <Navigation>
                <a href="/"><h6 className="anchor">DashBoard</h6></a>
                <a href="/sales"><h6 className="anchor">Sales & Billing</h6></a>
                <a href="/inventory"><h6 className="anchor">Inventory</h6></a>
                <a href="/expenses"><h6 className="anchor">Expenses</h6></a>
                <a href="/report"><h6 className="anchor">Reports</h6></a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

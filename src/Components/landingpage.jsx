import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SalesImg from './Images/receipts.jpg';
import InventoryImg from './Images/inven-images.jpg';
import ExpenseImg from './Images/expense.png';
import ReportImg from './Images/report.png';
//import  Main  from './main';

const useStyles = makeStyles({
  card: {
    width: 250,
    margin: 50,
        
  },
  media: {
    height: 140,
    Width: 200,
  },

});

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="d-flex" style={{display: 'flex', flexWrap: 'wrap'}}>
        <div>
            <Card className={classes.card} style={{marginLeft: 250}}>
                <CardActionArea>
                   
                        <CardMedia
                            className={classes.media}
                            image={SalesImg}
                            title="Sales and Billing"
                        />
                </CardActionArea>
                <div>
                    <CardActions>
                        <a href="/sales" style={{textDecoration:'none'}}>
                            <Button size="large" color="secondary" >
                            Sales and Billing
                            </Button>
                        </a>
                    </CardActions>
                </div>
            </Card>
        </div>
        <div>
            <Card className={classes.card} style={{marginLeft: 250}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={InventoryImg}
                        title="Inventory"
                    />
                </CardActionArea>
                <CardActions>
                    <a href="/inventory" style={{textDecoration:'none'}}>
                    <Button size="large" color="secondary" >
                    Inventory
                    </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
        <div>
            <Card className={classes.card}  style={{marginLeft: 250}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ExpenseImg}
                        title="Expenses"
                    />
                </CardActionArea>
                <CardActions>
                    <a href="/expenses" style={{textDecoration:'none'}}>
                    <Button size="large" color="secondary" >
                    Expenses
                    </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
        <div>
            <Card className={classes.card} style={{marginLeft: 250}}> 
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ReportImg}
                        title="Report"
                    />
                </CardActionArea>
                <CardActions>
                    <a href="/report" style={{textDecoration:'none'}}>
                    <Button size="large" color="secondary" >
                    Report
                    </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    </div>
  );
}
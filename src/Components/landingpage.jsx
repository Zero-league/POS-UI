import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SalesImg from './Images/receipts.jpg';
import InventoryImg from './Images/inven-images.jpg';

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
    <div className="d-flex">
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
                        <Button size="large" color="secondary">
                        Sales and Billing
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </div>
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={InventoryImg}
                        title="Inventory"
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="secondary" >
                    Inventory
                    </Button>
                </CardActions>
            </Card>
        </div>
    </div>
  );
}
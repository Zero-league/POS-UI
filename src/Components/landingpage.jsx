import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 250,
    margin: 100,
  },
  media: {
    height: 140,
  },

});

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div styles={{display: 'flex'}}>
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./Images/paper-receipts.jpg"
                        title="Sales and Billing"
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="secondary" >
                    Sales and Billing
                    </Button>
                </CardActions>
            </Card>
        </div>
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./Images/inven-images.jpg"
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